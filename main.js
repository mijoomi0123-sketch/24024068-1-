document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const lottoNumbersContainer = document.getElementById('lotto-numbers');

    const getNumberColorClass = (number) => {
        if (number <= 10) return 'number-color-1';
        if (number <= 20) return 'number-color-2';
        if (number <= 30) return 'number-color-3';
        if (number <= 40) return 'number-color-4';
        return 'number-color-5';
    };

    const generateLottoNumbers = () => {
        lottoNumbersContainer.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach((number, index) => {
            const numberElement = document.createElement('div');
            numberElement.classList.add('lotto-number');
            numberElement.textContent = number;
            numberElement.classList.add(getNumberColorClass(number));
            numberElement.style.animationDelay = `${index * 0.1}s`;
            lottoNumbersContainer.appendChild(numberElement);
        });
    };

    generateBtn.addEventListener('click', generateLottoNumbers);

    // 페이지 로드 시 초기 번호 생성
    generateLottoNumbers();
});
