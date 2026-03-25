const btnWrap = document.querySelector('.btn_wrap');

let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 100) {
    // 아래로 스크롤 → 보여줌
    btnWrap.classList.add('show');
  } else {
    // 위로 스크롤 → 숨김
    btnWrap.classList.remove('show');
  }

  lastScroll = currentScroll;
});