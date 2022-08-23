/*  ==============================================
    Click player SELECT button for get player name
    ============================================== */
function getPlayerName(selectBtnId) {
    const selectBtn = document.getElementById(selectBtnId);
    const playerName = selectBtn.parentNode.children[0].innerText;

    return playerName;
}

/*  ====================================================
    Click player SELECT button for get player button Id
    ==================================================== */
function addToPlayer(playerBtnId) {
    const clickbtn = document.getElementById(playerBtnId);
    return clickbtn;
}

/*  ======================================
    Disabled Button
    ====================================== */
function disableButton(cardBtn) {
    const button = document.getElementById(cardBtn);
    button.disabled = true;
    button.style.backgroundColor = 'gray';
}

/*  ======================================
    add list item & set player name
    ====================================== */
function addListItem(cardBtnId) {
    const listContainer = document.getElementById('selected-list');
    const list = listContainer.children.length;

    if (list <= 4) {
        const liCreate = document.createElement('li');
        liCreate.innerText = getPlayerName(cardBtnId);
        listContainer.appendChild(liCreate);
        disableButton(cardBtnId); // Disabled Button
    } else {
        alert('Super Five Hero Selected.');
    }
}

/*  ======================================
    list Item count
    ====================================== */
function ListCount() {
    const listContainer = document.getElementById('selected-list');
    const listItem = listContainer.children.length;
    console.log(listItem);
    return listItem;
}

/*  ==============================================
    get amount on input field
    ============================================== */
function getAmountById(amountId) {
    const amountById = document.getElementById(amountId);
    const amountString = amountById.value;
    const amount = parseInt(amountString);

    return amount;
}

/*  ==============================================
    get player total budget
    ============================================== */
function playerBudget() {
    const perPlayerBudget = getAmountById('player-budget');
    const playerTotalBudget = perPlayerBudget * ListCount();

    const playerExpenses = document.getElementById('player-exp');
    playerExpenses.innerText = playerTotalBudget;

    return playerTotalBudget;
}