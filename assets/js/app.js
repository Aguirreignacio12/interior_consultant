let home_img = document.querySelector(".home__image");
let home_txt = document.querySelector(".home__presentation");
let card = document.querySelector(".card");

const height = card.clientHeight;
const width = card.clientWidth;

window.addEventListener('load', (evt) => {
  home_img.classList.add('loaded');
  card.classList.add('loaded');
  home_txt.classList.add('loaded');
}
)

card.addEventListener('mousemove', (evt) => {
  const { layerX, layerY } = evt;

  const yRotation = ((layerX - width / 2) / width) * 20;

  const xRotation = ((layerY - height / 2) / height) * 20;

  const string = `
  perspective(500px)
  scale(1.1)
  rotateX(${xRotation}deg)
  rotateY(${yRotation}deg)`

  card.style.transform = string
})

card.addEventListener('mouseout', () => {
  card.style.transform = `
  perspective(500px)
  scale(1)
  rotateX(0)
  rotateY(0)`
})
