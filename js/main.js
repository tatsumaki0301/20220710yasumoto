function scrollTop(elem) {
  const target = document.getElementById(elem);
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

scrollTop('button');

const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById('nav');
  nav.classList.toggle('in');
});


const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modal','header_ttl');
openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  header_ttl.style.position = 'static';
})
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  header_ttl.style.position = 'fixed'
})
window.addEventListener('click', (e) => {
  if (!e.target.closest('.modal_content-inner') && e.target.id !== "openBtn") {
    modal.style.display = 'none';
  }
})

