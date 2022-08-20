document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositField = document.getElementById
        ('deposit-input');

    const depositAmount = depositField.value;
    // console.log(depositAmount);
    const newDepositAmount = parseFloat(depositAmount);

    const depositTotalElement = document.getElementById('deposit-total');

    const previousDepositTotal = depositTotalElement.innerText;

    const newDepositTotal = parseFloat(previousDepositTotal);

    // console.log(depositTotal);

    const currentTotalDeposit = newDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentTotalDeposit;

    // console.log(newDepositAmount, newDepositTotal);

    const blanceTotalElement = document.getElementById('totalBlance');

    const previousTotalBlanceString = blanceTotalElement.innerText;

    const previousTotalBlance = parseFloat(previousTotalBlanceString);


    const currentTotalBlance = previousTotalBlance + newDepositAmount;

    blanceTotalElement.innerText = currentTotalBlance;








    depositField.value = '';


})