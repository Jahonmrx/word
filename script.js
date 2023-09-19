let kompNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;
let language = 'eng';
let engToUzb = {
  'Start guessing...':'Topishni boshla...',
  '⛔ No number': '⛔ Raqam kirit!',
  '📈 Too high': "📈 O'ylaganim kichikroq",
  '📉 Too low': "📉 O'ylaganim kattaroq",
  '✅ Correct number': "✅ To'g'ri topding",
  '🤪 You lost the game': "🤪 Yutqazding" 
}

function showMessage(message) {
  if(language == "uzb"){
    document.querySelector('.message').textContent = engToUzb[message];
  }
  else{
    document.querySelector('.message').textContent = message;
  }
}


document.querySelector('.check').addEventListener('click', () => {
  let guessNumber = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guessNumber) {
      showMessage('⛔ No number');
    } else if (guessNumber > kompNumber) {
      score--;
      document.querySelector('.score').textContent = score;
      showMessage('📈 Too high');
    } else if (guessNumber < kompNumber) {
      score--;
      document.querySelector('.score').textContent = score;
      showMessage('📉 Too low');
    } else {
      highScore = score > highScore ? score : highScore;
      document.querySelector('.number').textContent = kompNumber;
      showMessage('✅ Correct number');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '25rem';
    }
  } 
  else {
    showMessage('🤪 You lost the game');
  }
});

// Again

document.querySelector('.again').addEventListener('click', () => {
  score = 10;
  document.querySelector('.score').textContent = score;
  kompNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  showMessage('Start guessing...');
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '17rem';
});

// Language

document.querySelector('.uzbek').addEventListener('click', () => {
  language = 'uzb';
  document.querySelector('.again').textContent = 'Qayta!';
  document.querySelector('.between').textContent = '(1 dan 20 gacha)';
  document.querySelector('h1').textContent = "O'ylagan sonimni top!";
  document.querySelector('.message').textContent = 'Topishni boshla...';
  document.querySelector('.label-score').innerHTML = '💯 Imkon: <span class="score">20</span>';
  document.querySelector('.label-highscore').innerHTML = '🥇 Rekord: <span class="highscore">0</span>';
  document.querySelector('.check').textContent = 'Tekshir';
});

document.querySelector('.eng').addEventListener('click', () => {
  language = 'eng';
  document.querySelector('.again').textContent = 'Again!';
  document.querySelector('.between').textContent = '(Between 1 and 20)';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.label-score').innerHTML = '💯 Score: <span class="score">20</span>';
  document.querySelector('.label-highscore').innerHTML = '🥇 Highscore: <span class="highscore">0</span>';
  document.querySelector('.check').textContent = 'Check!';
});