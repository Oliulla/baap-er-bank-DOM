// step-1: add event listener for deposite button
document.getElementById('btn-deposite').addEventListener('click', () => {
    // step-2: get the deposite amount from the deposite input field
    const userDeposite = document.getElementById('user-deposite');
    const newDepositeAmount = userDeposite.value;
    const newDepositeAmountFloat = parseFloat(newDepositeAmount);

    // step-3: get the current deposite total
    const depositeTotalElem = document.getElementById('deposite-total');
    const previousDepositeTotal = depositeTotalElem.innerText;
    const previousDepositeTotalFloat = parseFloat(previousDepositeTotal);
    const currentTotal = newDepositeAmountFloat + previousDepositeTotalFloat;
    depositeTotalElem.innerText = currentTotal;


    // step-4: raise total balance
    const totalBalanceElem = document.getElementById('total-balance');
    const previousTotalBankBalance = totalBalanceElem.innerText;
    const previousTotalBankBalanceFloat = parseFloat(previousTotalBankBalance);
    
    // step-5: calculate current total
    const currentBankTotalBalance = previousTotalBankBalanceFloat + newDepositeAmountFloat;
    totalBalanceElem.innerText = currentBankTotalBalance;

    // step-6: clear the deposite field
    userDeposite.value = '';
});