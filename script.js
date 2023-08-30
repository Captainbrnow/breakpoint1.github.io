// Get references to DOM elements
const tweetText = document.getElementById('tweet-text');
const postButton = document.getElementById('post-button');
const fileUpload = document.getElementById('file-upload');
const tweetsContainer = document.getElementById('tweets-container');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav');

// Add event listener for the file input
fileUpload.addEventListener('change', () => {
    // Get the selected file
    const selectedFile = fileUpload.files[0];

    // You can now handle the selected file, e.g., upload it to a server or display it to the user.
    // For a basic example, let's log the file name to the console.
    console.log('Selected file:', selectedFile.name);
});

// Add event listener for the "Hamburger" button
hamburgerMenu.addEventListener('click', () => {
    // Toggle the visibility of the navigation menu
    nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'block' : 'none';
});
