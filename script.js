const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');
btnTema.addEventListener('click', function() {
  bodyHalaman.classList.toggle('light-mode');
  if (bodyHalaman.classList.contains('light-mode')) {
    btnTema.textContent = '🌙 Mode Gelap';
  } else {
    btnTema.textContent = '☀️ Mode Terang';
  }
});
const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');
btnBukaModal.addEventListener('click', function(event) {
 event.preventDefault(); 
 elemenModal.classList.add('show');
});
btnTutupModal.addEventListener('click', function() {
 elemenModal.classList.remove('show'); 
});
const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
function updateClock() {
  const now = new Date();
  const jam = now.getHours().toString().padStart(2, "0");
  const menit = now.getMinutes().toString().padStart(2, "0");
  const detik = now.getSeconds().toString().padStart(2, "0");
  document.getElementById("liveClock").textContent = 
    `🕒 ${jam}:${menit}:${detik}`;
}

setInterval(updateClock, 1000);
updateClock();