function handleResponse(response) {
    if (response === 'yes') {
        alert('Congratulations! She said yes! 🎉');

        // Log to console for debugging purposes
        console.log('User clicked Yes');

        // Add additional interactions here, if needed
    } else {
        alert('Sorry to hear that. Keep smiling!');

        // Log to console for debugging purposes
        console.log('User clicked No');
    }
}
