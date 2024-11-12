// JavaScript for sorting numbers
let numbers = [8, 3, 5, 1, 4];

// Function to sort the numbers when the button is clicked
document.getElementById('sortButton').onclick = function() {
    // Sorting the array in ascending order
    numbers.sort((a, b) => a - b);  
    // Displaying the sorted numbers
    document.getElementById('result').textContent = 'Sorted Numbers: ' + numbers.join(', ');
    // Updating the unsorted numbers text
    document.getElementById('arrayDisplay').textContent = 'Unsorted Numbers: ' + numbers.join(', ');
};
