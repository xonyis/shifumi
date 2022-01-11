var choixUserDis = document.getElementById('choixUser');
var choixComputerDis = document.getElementById('choixComputer');
var resultDisplay = document.getElementById('result');
const choixPosible = document.querySelectorAll('button');
var choixUser;
var computerChoix;
var computerScoreDis = document.getElementById('computerScore');
var userScoreDis = document.getElementById('userScore');
var computerScore = 0;
var userScore = 0;
var result;

choixPosible.forEach(choixPosible => choixPosible.addEventListener('click', e => {
    generateComputer();
    choixUser = e.target.id;
    
    console.log(choixUser);
    console.log(computerChoix);
    choixComputerDis.innerHTML = computerChoix;
    choixUserDis.innerHTML = choixUser;
    computerScoreDis.innerHTML = computerScore;
    userScoreDis.innerHTML = userScore;
    
    resulta();
    
}))

function generateComputer() {
    
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        computerChoix ='pierre';
    }
    if (random === 1) {
        computerChoix ='feuille';
    }
    if (random === 2) {
        computerChoix ='ciseaux';
    }
    //choixComputerDis.innerHTML = computerChoix;
}

function resulta() {
    if (computerChoix === choixUser) {
        result = 'Egalité';
    }
    else if (computerChoix === 'pierre' && choixUser === 'feuille') {
        result = 'Joueur gagne';
        
    }
    else if (computerChoix === 'pierre' && choixUser === 'ciseaux') {
        result = 'Ordi gagne';
        
    }
    else if (computerChoix === 'feuille' && choixUser === 'ciseaux') {
        result = 'Joueur gagne';
    }
    else if (computerChoix === 'feuille' && choixUser === 'pierre') {
        result = 'Ordi gagne';
        
    }
    else if (computerChoix === 'ciseaux' && choixUser === 'pierre') {
        result = 'Joueur gagne';
        
    }
    else if (computerChoix === 'ciseaux' && choixUser === 'feuille') {
        result = 'Ordi gagne';
    }
    if (result === 'Ordi gagne') {
        computerScore++
    } if (result === 'Joueur gagne') {
        userScore++
    }
    
    
}
