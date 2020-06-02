var userName = '';

userName ? console.log('Hello, ' + userName + '!') : console.log("Hello!");

var userQuestion = '';
 console.log(userName + ' asked: ' + userQuestion);

var randomNumber = Math.floor(Math.random() * 8);
var eightBall = randomNumber;

switch (eightBall) {
  case 0:
  eightBall = 'Dude, absolutely not'
  break;
  case 1:
  eightBall = 'Few things are absolute, but this is!'
  break;
  case 2:
  eightBall = 'I\'d think it\'s safe to say, yes'
  break;
  case 3:
  eightBall = 'Reply hazy, I can\'t find my glasses, try again'
  break;
  case 4:
  eightBall = 'Cannot predict now, just not enough karma in the air'
  break;
  case 5:
  eightBall = 'Don\'t count on it'
  break;
  case 6:
  eightBall = 'My sources say.....no'
  break;
  case 7:
  eightBall = 'Outlook not so good, pretty grim really'
  break;
  case 8:
  eightBall = 'Signs point to yes, hell yes, it\'s totally gonna happen'
  break;

}
console.log('The Magic 8 Ball answered: ' + eightBall);
