function handleResponse(response) {
    if (response === 'yes') {
        alert('Congratulations! She said yes! 🎉');

        // Add additional interactions here, such as redirecting or displaying a message.
        // For example, you can redirect the user to a thank-you page after a delay:
        setTimeout(function() {
            window.location.href = 'thankyou.html';
        }, 3000); // Redirect after 3 seconds
    } else {
        alert('Sorry to hear that. Keep smiling!');
    }
}
