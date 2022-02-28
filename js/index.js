// Target the button element

let buttonElement = $('.roll')[0];

// Add a Event Listener (click) and a function who choose a dice face between 1-6

buttonElement.addEventListener('click', function rollDice() {

    // Get a random number value 1
    
    let value = Math.floor((Math.random() * 6) + 1);

    if (value === 1) {
        addRemoveClasses('face', 'face1');
        $('img')[0].classList.add('face1');
    }
    else if (value === 2) {
        addRemoveClasses('face', 'face1');
        $('img')[1].classList.add('face1');
    }
    else if (value === 3) {
        addRemoveClasses('face', 'face1');
        $('img')[2].classList.add('face1');
    }
    else if (value === 4) {
        addRemoveClasses('face', 'face1');
        $('img')[3].classList.add('face1');
    }
    else if (value === 5) {
        addRemoveClasses('face', 'face1');
        $('img')[4].classList.add('face1');
    }
    else if (value === 6) {
        addRemoveClasses('face', 'face1');
        $('img')[5].classList.add('face1');
    }

    // Get a random number value 2

    let value2 = Math.floor((Math.random() * 6) + 1);

    if (value2 === 1) {
        addRemoveClasses('face0', 'face7');
        $('img')[6].classList.add('face7');
    }
    else if (value2 === 2) {
        addRemoveClasses('face0', 'face7');
        $('img')[7].classList.add('face7');
    }
    else if (value2 === 3) {
        addRemoveClasses('face0', 'face7');
        $('img')[8].classList.add('face7');
    }
    else if (value2 === 4) {
        addRemoveClasses('face0', 'face7');
        $('img')[9].classList.add('face7');
    }
    else if (value2 === 5) {
        addRemoveClasses('face0', 'face7');
        $('img')[10].classList.add('face7');
    }
    else if (value2 === 6) {
        addRemoveClasses('face0', 'face7');
        $('img')[11].classList.add('face7');
    }

    if (value > value2) {
        $('h2')[0].innerHTML = 'Player 1 wins 🥇';
    }
    else if (value < value2) {
        $('h2')[0].innerHTML = 'Player 2 wins 🥇';
    }
    else {
        $('h2')[0].innerHTML = 'Draw!';
    }

});

// Add and Delete Classes

function addRemoveClasses (addClass, removeClass) {
    for (let i = 0; i < $('img').length; i++) {
        $('img')[i].classList.add(addClass);
    }
    for (let i = 0; i < $('img').length; i++) {
        $('img')[i].classList.remove(removeClass);
    }
}

