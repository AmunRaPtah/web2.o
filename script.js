// Dynamic Tagline Rotation
const taglines = document.querySelectorAll('.tagline');
let currentTaglineIndex = 0;

function rotateTagline() {
    taglines[currentTaglineIndex].style.display = 'block'; // Show the current tagline

    // Hide the previous tagline if there is one
    if (currentTaglineIndex > 0) {
        taglines[currentTaglineIndex - 1].style.display = 'none';
    }

    currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length; // Cycle through taglines
}

// Start tagline rotation
rotateTagline();
setInterval(rotateTagline, 3000); // Rotate every 3 seconds

// Contact Us Modal
const contactUsLink = document.getElementById('contact-us-link');
const contactUsModal = document.createElement('div'); // Create a modal element
contactUsModal.id = 'contact-us-modal';
contactUsModal.innerHTML = `
    <div class="modal-content">
        <span class="close-modal">×</span>
        <h2>Contact Us</h2>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
        </form>
    </div>
`;
document.body.appendChild(contactUsModal); // Add the modal to the body

// Open the modal
contactUsLink.addEventListener('click', (event) => {
    event.preventDefault();
    contactUsModal.style.display = 'block'; // Show the modal
});

// Close the modal
const closeModalButton = document.querySelector('.close-modal');
closeModalButton.addEventListener('click', () => {
    contactUsModal.style.display = 'none'; // Hide the modal
});

// Add additional JavaScript as needed for other features (carousels, forms, etc.)
