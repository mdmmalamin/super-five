// Player Select button
function playerCardName(cardBtn){
    const btn = document.getElementById(cardBtn);
    const playerName = btn.parentNode.children[0].innerText;
    
    return playerName;
}

// Disabled Button
function disableButton(cardBtn){
    const button = document.getElementById(cardBtn);
    button.disabled = true;
    button.style.backgroundColor = 'gray';
}