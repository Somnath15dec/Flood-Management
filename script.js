function submitFeedback(event) {
    event.preventDefault();

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // Simple feedback message display (could be extended to send data to a server)
    const feedbackMessage = document.getElementById('feedbackMessage');
    feedbackMessage.innerText = `Thank you, ${name}, for your feedback!`;
    
    // Clear form
    document.getElementById('feedbackForm').reset();
}
