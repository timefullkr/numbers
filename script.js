document.getElementById('generate').addEventListener('click', function() {
    let numbers = generateLottoNumbers();
    displayNumbers(numbers);
});

function generateLottoNumbers() {
    let numbers = [];
    var nums=$("#num").val() 
        nums=parseInt(nums)
    while (numbers.length < nums) {
        let num = Math.floor(Math.random() * nums) + 1;
        if (numbers.indexOf(num) === -1) {
            numbers.push(num);
        }
    }
    return numbers
}

function displayNumbers(numbers) {
    const numbersDiv = document.getElementById('numbers');
    numbersDiv.innerHTML = '';
    numbers.forEach(num => {
        let numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = num;
        numbersDiv.appendChild(numberElement);
    });
}
