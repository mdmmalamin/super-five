// Player Select button
const allPlayerName = [];

function playerCardName(selectBtn) {
    const btn = document.getElementById(selectBtn);
    const playerName = btn.parentNode.children[0].innerText;

    return playerName;
}

function addToPlayer(playerBtnId) {
    const clickbtn = document.getElementById(playerBtnId);
    return clickbtn;
}

// Disabled Button
function disableButton(cardBtn) {
    const button = document.getElementById(cardBtn);
    button.disabled = true;
    button.style.backgroundColor = 'gray';
}
// add list
function addList(cardBtnId) {
    const listContainer = document.getElementById('selected-list');
    const list = listContainer.children.length;
    console.log(list)
    if (list <= 4) {
        const li = document.createElement('li');
        li.innerText = playerCardName(cardBtnId);
        // li.classList.add('');
        listContainer.appendChild(li);

        disableButton(cardBtnId); // Disabled Button
    }
    else{
        alert('Five Hero Selected.');
    }
    return list;
}