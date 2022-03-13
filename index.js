const TicTacToe = require('discord-tictactoe');

 new TicTacToe({
   token: 'YOUR TOKEN',
   language: 'en',
   command: 'tictactoe',
   commandOptionName: 'opponent',
   textCommand: ''
     
 }).login()
   .then(() => console.log("The bot is online"));
