let playerInput = prompt('Wybierz swój ruch! 1: Kamień, 2: Papier, 3: Nożyce');
console.log('Gracz wybrał: ' + playerInput);

let playerMove = 'Nieznany ruch';
if (playerInput == '1'){
    playerMove = 'Kamień';
} else if (playerInput == '2') {
    playerMove = 'Papier';
} else if (playerInput == '3') {
    playerMove = 'Nożyce';
}
else {playerMove = 'Niepoprawny ruch!'}
printMessage('Twój ruch to ' + playerMove);


let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to ' + randomNumber);

let computerMove = 'Nieznany ruch';
if (randomNumber == 1) {
  computerMove = 'Kamień';
} else if (randomNumber == 2) {
  computerMove = 'Papier';
} else if (randomNumber == 3) {
  computerMove = 'Nożyce';
}
printMessage('Mój ruch to ' + computerMove);

if (playerMove == computerMove) {
    printMessage('Remis!');
} else if ( playerMove == 'Kamień' && computerMove == 'Papier') {
    printMessage('Przegrałeś!');
} else if ( playerMove == 'Kamień' && computerMove == 'Nożyce') {
    printMessage('Wygrałeś!');
} else if ( playerMove == 'Papier' && computerMove == 'Kamień') {
    printMessage('Wygrałeś!');
} else if ( playerMove == 'Papier' && computerMove == 'Nożyce') {
    printMessage('Przegrałeś!');
} else if ( playerMove == 'Nożyce' && computerMove == 'Kamień') {
    printMessage('Przegrałeś!');
} else if ( playerMove == 'Nożyce' && computerMove == 'Papier') {
    printMessage('Wygrałeś!');
} else if (playerMove == 'Niepoprawny ruch!') {
    printMessage('Przegrałeś: Niepoprawny ruch gracza!');
}
