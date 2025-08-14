<?php
// contact-form-handler.php — improved minimal handler
header('Content-Type: application/json; charset=utf-8');
session_start();

// Config
$to = 'info@arak.ly';           // recipient
$fromAddress = 'no-reply@arak.ly'; // fixed From (domain-owned)
$subjectBase = 'New Contact Form Submission';

// Rate limit (seconds)
$minInterval = 15;
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
if (isset($_SESSION['last_submit_ts']) && (time() - $_SESSION['last_submit_ts'] < $minInterval)) {
  http_response_code(429);
  echo json_encode(['error' => 'Too many submissions, try again later.']);
  exit;
}

// Helpers
function clean_input(string $s, int $max = 1000): string {
  $s = trim($s);
  $s = strip_tags($s);
  $s = substr($s, 0, $max);
  return $s;
}
function no_header_injection(string $s): string {
  return str_replace(["\r", "\n"], '', $s);
}

// Only POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

// Collect + sanitize
$firstName = clean_input($_POST['firstName'] ?? '', 60);
$lastName  = clean_input($_POST['lastName'] ?? '', 60);
$email     = trim($_POST['email'] ?? '');
$company   = clean_input($_POST['company'] ?? '', 100);
$phone     = clean_input($_POST['phone'] ?? '', 40);
$message   = clean_input($_POST['message'] ?? '', 3000);

// Basic validation
if (!$firstName || !$lastName || !$email || !$message) {
  http_response_code(400);
  echo json_encode(['error' => 'Please fill all required fields.']);
  exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid email address.']);
  exit;
}

// Prevent header injection in any header values
$replyTo = no_header_injection($email);
$firstNameSafe = no_header_injection($firstName);
$lastNameSafe  = no_header_injection($lastName);

// Build email
$subject = mb_encode_mimeheader($subjectBase, 'UTF-8');
$body  = "Name: {$firstNameSafe} {$lastNameSafe}\n";
$body .= "Email: {$replyTo}\n";
$body .= "Company: {$company}\n";
$body .= "Phone: {$phone}\n";
$body .= "IP: {$ip}\n";
$body .= "Message:\n{$message}\n";

// Headers: From must be domain email; put user in Reply-To
$headers  = "From: {$fromAddress}\r\n";
$headers .= "Reply-To: {$replyTo}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Ensure logs directory exists inside public
@mkdir(__DIR__ . '/logs', 0755, true);
// Optionally log to file (rotate in production)
$logLine = date('c') . " | {$ip} | {$replyTo} | " . addslashes(substr($message,0,200)) . "\n";
@file_put_contents(__DIR__ . '/logs/contact.log', $logLine, FILE_APPEND | LOCK_EX);

// Send
$ok = mail($to, $subject, $body, $headers);
$_SESSION['last_submit_ts'] = time();

if ($ok) {
  echo json_encode(['success' => true]);
} else {
  http_response_code(500);
  echo json_encode(['error' => 'Failed to send email.']);
}
?>
