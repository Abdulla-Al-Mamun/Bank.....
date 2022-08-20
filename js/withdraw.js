document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawAmount = document.getElementById('withdraw-input');

    const withdrawAmountString = withdrawAmount.value;

    const newWithdrawAmount = parseFloat(withdrawAmountString);

    // console.log(newWithdrawAmount);

    const totalWithdraw = document.getElementById('total-withdraw');

    const totalWithdrawString = totalWithdraw.innerText;

    const totalWithdrawAmount = parseFloat(totalWithdrawString);

    const currentTotalWithdraw = newWithdrawAmount + totalWithdrawAmount;


    totalWithdraw.innerText = currentTotalWithdraw;




    const blanceTotalElement = document.getElementById('totalBlance');

    const previousTotalBlanceString = blanceTotalElement.innerText;

    const previousTotalBlance = parseFloat(previousTotalBlanceString);


    const currentTotalBlance = previousTotalBlance - newWithdrawAmount;

    blanceTotalElement.innerText = currentTotalBlance;



    withdrawAmount.value = '';




})