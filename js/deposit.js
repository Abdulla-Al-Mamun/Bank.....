document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositField = document.getElementById
        ('deposit-input');

    const depositAmount = depositField.value;
    // console.log(depositAmount);

    const depositTotalElement = document.getElementById('deposit-total');

    const depositTotal = depositTotalElement.innerText;

    // console.log(depositTotal);

    depositTotalElement.innerText = depositAmount;

})