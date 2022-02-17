/* 
 * Author: Hasan
 * Github: https://github.com/hasanrafi69
 * Email: hasanrafi69@gmail.com
 * Mobile: +880-161-782323
 */
// ===========Mony Booth=========
const incomeId = document.getElementById('income');
const totalExpenseId = document.getElementById('total-expense');
const foodId = document.getElementById('food');
const rentId = document.getElementById('rent');
const clothId = document.getElementById('cloth');
const totalBalanceId = document.getElementById('total-balance');
const saveAmountId = document.getElementById('save-amount');
const totalSaveId = document.getElementById('total-save');
const remainingBalanceId = document.getElementById('remaining-balance');
// Calculate Money
function calculateMoney() {
    const income = parseFloat(incomeId.value);
    const food = parseFloat(foodId.value);
    const rent = parseFloat(rentId.value);
    const cloth = parseFloat(clothId.value);
    const totalExpense = food + rent + cloth;
    if (income == '' || typeof(income) != 'number') {
        alert('Income Cant be Null')
    }
    if (food == '' || typeof(food) != 'number') {
        alert('food Cant be Null')
    }
    if (rent == '' || typeof(rent) != 'number') {
        alert('rent Cant be Null')
    }
    if (cloth == '' || typeof(cloth) != 'number') {
        alert('cloth insert number')
    }
    if (typeof(income) == 'number' && typeof(food) == 'number' && typeof(rent) == 'number' && typeof(cloth) == 'number') {
        totalExpenseId.innerText = totalExpense;
        const totalBalance = income - totalExpense;
        totalBalanceId.innerText = totalBalance;
    } else {
        totalExpenseId.innerHTML = `<p class="ml-1 text-xl text-red-600 text-center">Please give all value as a numer</p>`;
        totalBalanceId.innerHTML = `<p class="ml-1 text-xl text-red-600 text-center">Please give all value as a numer</p>`;
    }



}

// Save Money
function saveMoney() {
    const income = parseFloat(incomeId.value);
    console.log(incomeId.value);
    const food = parseFloat(foodId.value);
    const rent = parseFloat(rentId.value);
    const cloth = parseFloat(clothId.value);
    const totalExpense = food + rent + cloth;
    const saveAmount = parseFloat(saveAmountId.value) / 100;
    const totalSaveAmount = income * saveAmount;
    if (typeof(saveAmountId.value) == 'number' && typeof(income) == 'number' && typeof(food) == 'number' && typeof(rent) == 'number' && typeof(cloth) == 'number') {
        totalSaveId.innerText = totalSaveAmount;
        const totalBalance = income - totalExpense;
        const remainingBalance = totalBalance - totalSaveAmount
        remainingBalanceId.innerText = remainingBalance;
    } else {
        totalSaveId.innerHTML = `<p class="ml-1 text-xl text-red-600 text-center">Please give all value as a numer</p>`;
    }

}

// Calculate Button
document.getElementById('calculate').addEventListener('click', function() {
    calculateMoney();
});
// Save Money Button
document.getElementById('save').addEventListener('click', function(params) {
    saveMoney()
});