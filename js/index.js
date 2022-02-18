
let buttonElement = document.querySelector('.roll');
buttonElement.addEventListener('click', function rollDice () {
    let value = Math.floor((Math.random() * 6) + 1);

    if (value === 1) {
        addRemoveClasses();
        document.querySelectorAll('img')[0].classList.add('face1');
    }
    else if (value === 2) {
        addRemoveClasses();
        document.querySelectorAll('img')[1].classList.add('face1');
    }
    else if (value === 3) {
        addRemoveClasses();
        document.querySelectorAll('img')[2].classList.add('face1');
    }
    else if (value === 4) {
        addRemoveClasses();
        document.querySelectorAll('img')[3].classList.add('face1');
    }
    else if (value === 5) {
        addRemoveClasses();
        document.querySelectorAll('img')[4].classList.add('face1');
    }
    else if (value === 6) {
        addRemoveClasses();
        document.querySelectorAll('img')[5].classList.add('face1');
    }
     
});

let buttonElement2 = document.querySelector('.roll');
buttonElement2.addEventListener('click', function rollDice2 () {
    let value2 = Math.floor((Math.random() * 6) + 1);

    if (value2 === 1) {
        addRemoveClasses2();
        document.querySelectorAll('img')[6].classList.add('face7');
    }
    else if (value2 === 2) {
        addRemoveClasses2();
        document.querySelectorAll('img')[7].classList.add('face7');
    }
    else if (value2 === 3) {
        addRemoveClasses2();
        document.querySelectorAll('img')[8].classList.add('face7');
    }
    else if (value2 === 4) {
        addRemoveClasses2();
        document.querySelectorAll('img')[9].classList.add('face7');
    }
    else if (value2 === 5) {
        addRemoveClasses2();
        document.querySelectorAll('img')[10].classList.add('face7');
    }
    else if (value2 === 6) {
        addRemoveClasses2();
        document.querySelectorAll('img')[11].classList.add('face7');
    }
});

function addRemoveClasses () {
    for (let i = 0; i < document.querySelectorAll('img').length; i++) {
        document.querySelectorAll('img')[i].classList.add('face');
    }
    for (let i = 0; i < document.querySelectorAll('img').length; i++) {
        document.querySelectorAll('img')[i].classList.remove('face1');
    }
}

function addRemoveClasses2 () {
    for (let i = 0; i < document.querySelectorAll('img').length; i++) {
        document.querySelectorAll('img')[i].classList.add('face0');
    }
    for (let i = 0; i < document.querySelectorAll('img').length; i++) {
        document.querySelectorAll('img')[i].classList.remove('face7');
    }
}
