const classData = {
  merchant: {
    title: '상인',
    desc: '고위험 고수익 루트를 설계하며 길드의 재정을 책임지는 전략형 클래스.',
  },
  hunter: {
    title: '헌터',
    desc: '카라반을 호위하며 도적을 추격하는 전장 특화 탱커/딜러 하이브리드.',
  },
  thief: {
    title: '도적',
    desc: '기동성과 은신을 활용해 교역 루트를 급습하는 하이리스크 암살형 클래스.',
  },
};

const pills = document.querySelectorAll('.class-pill');
const panel = document.getElementById('classPanel');

pills.forEach((pill) => {
  pill.addEventListener('click', () => {
    pills.forEach((item) => item.classList.remove('active'));
    pill.classList.add('active');

    const selected = classData[pill.dataset.class];
    panel.innerHTML = `<h3>${selected.title}</h3><p>${selected.desc}</p>`;
  });
});

const form = document.querySelector('.register-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = form.querySelector('button');
  button.textContent = '등록 완료!';
  button.disabled = true;
});
