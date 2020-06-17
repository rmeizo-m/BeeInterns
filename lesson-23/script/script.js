const container = document.querySelector('.cube')
const animation = document.querySelector('p.the-end');

animation.addEventListener('animationstart', () => {
  animation.textContent = 'Над демкой работал Винников Е.В';
});

animation.addEventListener('animationend', () => {;
  animation.textContent = 'Вот и все=)';
});

container.addEventListener('click', () => {
  animation.classList.toggle('active');
  let active = container.classList.contains('active');
  if (active) {
    container.textContent = "Демка на одной кнопке";
  } else {
    container.textContent = "Просто и быстро";
  }
});


container.addEventListener("mousemove", ()=>{
  container.style.background =' blue';
  container.style.color = '#fff';
});


container.addEventListener("mouseout", ()=>{
  container.style.background ='#f9f9f9';
  container.style.color = '#000';
});
