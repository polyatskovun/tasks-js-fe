function checkPalindrome() {
    const number = prompt("Введіть п'ятирозрядне число:");
    
    if (number && number.length === 5 && !isNaN(number)) {
        const reversed = number.split('').reverse().join('');
        const isPalindrome = number === reversed;
        
        document.getElementById('palindrome-result').innerHTML = 
            `<p>Число ${number} ${isPalindrome ? 'є' : 'не є'} паліндромом</p>`;
    } else {
        document.getElementById('palindrome-result').innerHTML = 
            `<p>Помилка: введіть коректне п'ятирозрядне число</p>`;
    }
}

function calculateDiscount() {
    const amount = parseFloat(prompt("Введіть суму покупки:"));
    
    if (isNaN(amount) || amount < 0) {
        document.getElementById('discount-result').innerHTML = 
            `<p>Помилка: введіть коректну суму</p>`;
        return;
    }
    
    let discount = 0;
    if (amount >= 200 && amount < 300) {
        discount = 3;
    } else if (amount >= 300 && amount < 500) {
        discount = 5;
    } else if (amount >= 500) {
        discount = 7;
    }
    
    const discountAmount = amount * (discount / 100);
    const finalAmount = amount - discountAmount;
    
    document.getElementById('discount-result').innerHTML = `
        <p>Сума покупки: ${amount} грн</p>
        <p>Знижка: ${discount}% (${discountAmount.toFixed(2)} грн)</p>
        <p>До оплати: ${finalAmount.toFixed(2)} грн</p>
    `;
}

function calculateStatistics() {
    let positive = 0, negative = 0, zeros = 0;
    let even = 0, odd = 0;
    
    for (let i = 1; i <= 10; i++) {
        const number = parseFloat(prompt(`Введіть ${i}-е число:`));
        
        if (isNaN(number)) {
            alert("Введіть коректне число!");
            i--; 
            continue;
        }
        
        if (number > 0) positive++;
        else if (number < 0) negative++;
        else zeros++;
        
        if (Number.isInteger(number)) {
            if (number % 2 === 0) even++;
            else odd++;
        }
    }
    
    document.getElementById('statistics-result').innerHTML = `
        <h3>Статистика введених чисел:</h3>
        <p>Додатніх: ${positive}</p>
        <p>Від'ємних: ${negative}</p>
        <p>Нулів: ${zeros}</p>
        <p>Парних (цілих): ${even}</p>
        <p>Непарних (цілих): ${odd}</p>
    `;
}

function showDaysOfWeek() {
    const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];
    let currentDay = 0;
    let result = '';
    
    do {
        result += `<p>${days[currentDay]}</p>`;
        currentDay = (currentDay + 1) % 7; 
    } while (confirm(`${days[currentDay - 1 >= 0 ? currentDay - 1 : 6]}. Хочеш побачити наступний день?`));
    
    document.getElementById('days-result').innerHTML = `
        <h3>Показані дні тижня:</h3>
        ${result}
    `;
}

