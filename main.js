document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    const themeSwitch = document.getElementById('theme-switch-checkbox');
    const doc = document.documentElement;

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

    const applyTheme = (theme) => {
        doc.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeSwitch.checked = theme === 'dark';
    };

    const toggleTheme = () => {
        const currentTheme = doc.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    };

    // Load saved theme or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (prefersDark) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
    
    themeSwitch.addEventListener('change', toggleTheme);
    generateBtn.addEventListener('click', generateLottoNumbers);

    // Initial number generation
    generateLottoNumbers();
});
