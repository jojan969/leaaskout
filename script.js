document.getElementById('noBtn').addEventListener('click', function() {
    // Change the image source
    document.getElementById('girlImage').src = 'nohellokitty.jpg';
    
    // Change the text
    document.getElementById('question').textContent = 'WRONG!!! Try again';

    // Get button dimensions
    const button = document.getElementById('noBtn');
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate random position
    const randomX = Math.random() * (viewportWidth - buttonWidth);
    const randomY = Math.random() * (viewportHeight - buttonHeight);

    // Apply random position
    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});

document.getElementById('yesBtn').addEventListener('click', function() {
    // Change the image source
    document.getElementById('girlImage').src = 'yeshellokitty.jpg';
    
    // Change the text
    document.getElementById('question').textContent = 'See you soon <3';
});