// step-1: add event listener for withdraw button
document.getElementById('btn-withdraw').addEventListener('click', () => {
    // step-2: get the withdraw amount from the withdraw input field
    const userWithdraw = document.getElementById('user-withdraw');
    const newUserWithdrawAmount = userWithdraw.value;
    const newUserWithdrawAmountFloat = parseFloat(newUserWithdrawAmount);

    // step-3: get the current withdraw total
    const withdrawTotalElem = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotalElem.innerText;
    const previousWithdrawTotalFloat = parseFloat(previousWithdrawTotal);
    const currentWithdrawTotal = previousWithdrawTotalFloat + newUserWithdrawAmountFloat;
    withdrawTotalElem.innerText = currentWithdrawTotal;


    // step-4: get total bank balance
    const totalBankBalanceElem = document.getElementById('total-balance');
    const totalBalance = totalBankBalanceElem.innerText;
    
    // step-5: calculate current total after withdraw
    const currentBankTotalBalance = totalBalance - newUserWithdrawAmountFloat;
    totalBankBalanceElem.innerText = currentBankTotalBalance;

    // step-7: clear the deposite field
    userWithdraw.value = '';
});