const URL = 'https://students.netoservices.ru/nestjs-backend/poll';
const xhr = new XMLHttpRequest();
xhr.open('GET', URL);
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const resObj = JSON.parse(xhr.responseText);
    const answers = resObj.data.answers;
    const title = resObj.data.title;
    const pollAnswers = document.getElementById('poll__answers');
    document.getElementById('poll__title').innerText = title;

    answers.forEach(answer => {
      const btn = document.createElement('button');
      btn.classList.add('poll__answer');
      btn.innerText = answer;
      pollAnswers.append(btn);
      btn.addEventListener('click', event => {
        event.preventDefault();
        alert('Спасибо, ваш голос засчитан!');
      });
    });
  };
};