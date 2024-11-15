document.getElementById('checkButton').addEventListener('click', () => {
    const inputString = document.getElementById('inputString').value.trim();
    const resultElement = document.getElementById('result');

    if (inputString === '') {
        resultElement.textContent = 'Please enter a valid string.';
        resultElement.style.color = 'red';
        return;
    }

    const cleanedString = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedString = cleanedString.split('').reverse().join('');

    if (cleanedString === reversedString) {
        resultElement.textContent = `"${inputString}" is a palindrome.`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `"${inputString}" is not a palindrome.`;
        resultElement.style.color = 'red';
    }
});
