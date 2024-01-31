<?php
// backend.php

// Function to send OTP to the provided phone number (you need to integrate with a third-party service)
function sendOTP($phoneNumber) {
    // Implement the logic to send OTP via SMS
    // This may involve using a service like Twilio or Nexmo
    // For simplicity, let's assume the OTP is '123456' in this example
    return '123456';
}

// Function to verify the entered OTP
function verifyOTP($enteredOTP, $expectedOTP) {
    // Compare the entered OTP with the expected OTP
    return $enteredOTP === $expectedOTP;
}

// Main logic
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'];

    if ($action === 'sendOTP') {
        $phoneNumber = $_POST['phoneNumber'];
        $otp = sendOTP($phoneNumber);

        // You might want to store the OTP in the server for verification
        // For simplicity, we'll return it to the frontend for now
        echo json_encode(['success' => true, 'otp' => $otp]);
    } elseif ($action === 'verifyOTP') {
        $phoneNumber = $_POST['phoneNumber'];
        $enteredOTP = $_POST['otp'];
        $expectedOTP = $_POST['otp']; // Retrieve the expected OTP from a secure storage (e.g., database)

        $success = verifyOTP($enteredOTP, $expectedOTP);

        echo json_encode(['success' => $success]);
    }
}
?>
