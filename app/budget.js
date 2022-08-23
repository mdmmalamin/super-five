// get amount
function getAmountById(amountId) {
    const amountById = document.getElementById(amountId);
    const amountString = amountById.value;
    const amount = parseInt(amountString);
    
    return amount;
}

// get player budget
function playerBudget() {
    const perPlayerBudget = getAmountById('player-budget');
    const playerTotalBudget = perPlayerBudget * 5;
    const playerExpenses = document.getElementById('player-exp');
    playerExpenses.innerText = playerTotalBudget;

    return playerTotalBudget;
}

// Calculate Selected Player Budget 
document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerBudget = getAmountById('player-budget');

    if (isNaN(perPlayerBudget)) {
        alert('Enter a valid Amount!');
        return;
    }

    playerBudget();
    
    // const playerTotalBudget = perPlayerBudget * 5;
    // const playerExpenses = document.getElementById('player-exp');
    // playerExpenses.innerText = playerTotalBudget;
    // return playerTotalBudget;
});

// Calculate Total Budget 
document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const managerCost = getAmountById('manager-budget');
    const coachCost = getAmountById('coach-budget');

    if (isNaN(managerCost)) {
        alert('Enter a valid amount for manager!');
        return;
    }
    if (isNaN(coachCost)) {
        alert('Enter a valid amount for coach!');
        return;
    }

    const totalExpenses = playerBudget() + managerCost + coachCost;
    const total = document.getElementById('total-exp');
    total.innerText = totalExpenses;

});