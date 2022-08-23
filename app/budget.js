/*  ==============================================
    Calculate Selected Player Budget
    ============================================== */ 
document.getElementById('btn-calculate').addEventListener('click', function() {
    const perPlayerCost = getAmountById('player-budget');
    if (isNaN(perPlayerCost)){
        alert('Enter a valid Amount for per player!');
        return;
    }
    playerBudget();
});

/*  ==============================================
    Calculate Total Budget 
    ============================================== */
document.getElementById('btn-calculate-total').addEventListener('click', function() {
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