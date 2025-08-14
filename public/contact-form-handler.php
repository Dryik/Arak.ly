<?php
// Simple contact form handler for cPanel hosting
header('Content-Type: application/json');

// Config
$to = 'info@arak.ly'; // Change to your email
$subject = 'New Contact Form Submission';

// Validate POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get and sanitize input
$firstName = trim($_POST['firstName'] ?? '');
$lastName = trim($_POST['lastName'] ?? '');
$email = trim($_POST['email'] ?? '');
$company = trim($_POST['company'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');

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

// Build email
$body = "Name: $firstName $lastName\n";
$body .= "Email: $email\n";
$body .= "Company: $company\n";
$body .= "Phone: $phone\n";
$body .= "Message:\n$message\n";
$headers = "From: $email\r\nReply-To: $email\r\n";

// Send
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email.']);
}
?>
