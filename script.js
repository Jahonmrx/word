console.log(document.querySelector('.again'));
console.log(document.querySelector('.again').textContent);


document.querySelector('.uzbek').addEventListener('click', () =>{
  document.querySelector('.again').textContent = 'Qayta!';
  document.querySelector('.between').textContent = '(1 dan 20 gacha)';
  document.querySelector('h1').textContent = "O'ylagan sonimni top!";
  document.querySelector('.message').textContent = 'Topishni boshla...';
  document.querySelector('.label-score').textContent = '💯 Imkon: 20';
  document.querySelector('.label-highscore').textContent = '🥇 Rekord: 0';
  document.querySelector('.check').textContent = 'Tekshir';
});

document.querySelector('.eng').addEventListener('click', () => {
  document.querySelector('.again').textContent = 'Again!';
  document.querySelector('.between').textContent = '(Between 1 and 20)';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.label-score').textContent = '💯 Score: 20';
  document.querySelector('.label-highscore').textContent = '🥇 Highscore: 0';
  document.querySelector('.check').textContent = 'Check!';
});