// Quick note: This was my first stab at a counter. Works fine, but could be fancier.

// Grab the button and counter elements
const clickyBtn = document.getElementById('clickyBtn');
const countSpan = document.getElementById('clickCount');

// Initialize counter - localStorage? Nah, too much for now
let clickCount = 0;

// Main click handler
clickyBtn.addEventListener('click', function() {
    clickCount++; // Simple increment
    countSpan.textContent = clickCount;
    
    // Add a little visual feedback
    clickyBtn.style.backgroundColor = '#2f855a'; // Darker green temp
    setTimeout(() => {
        clickyBtn.style.backgroundColor = '#48bb78'; // Back to normal
    }, 150); // Short delay, feels snappy
    
    // Old alert code - keeping it but commented out, too annoying
    // alert('You clicked ' + clickCount + ' times! Keep going!');
    
    console.log('Button clicked! Total: ' + clickCount); // For dev console fun
});

// Unused function - thought about adding reset, but lazy today
function resetCounter() {
    clickCount = 0;
    countSpan.textContent = 0;
    // console.log('Reset!'); // Would log if called
}

// Wait for DOM? Nah, it's simple, but good practice
document.addEventListener('DOMContentLoaded', function() {
    // Load saved count if any - but skipping for now
    // clickCount = localStorage.getItem('clicks') || 0;
    // countSpan.textContent = clickCount;
});
