// script.js
function sendOTP() {
    var phoneNumber = document.getElementById('phoneNumber').value;

    // Perform AJAX request to the backend to initiate OTP sending
    fetch('backend.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'sendOTP', phoneNumber: phoneNumber }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Display OTP input field
        document.getElementById('otpSection').style.display = 'block';
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error, e.g., show an error message to the user
    });
}

function verifyOTP() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    var otp = document.getElementById('otp').value;

    // Perform AJAX request to the backend to verify OTP
    fetch('backend.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'verifyOTP', phoneNumber: phoneNumber, otp: otp }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        if (data.success) {
            // Redirect to the success page or perform other actions
            alert('Login Successful!');
        } else {
            alert('Login Failed. Invalid OTP.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error, e.g., show an error message to the user
    });
}
