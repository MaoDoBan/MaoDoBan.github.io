const botão_esquerdo = document.querySelector(".botao-seta.-left");
const botão_direito  = document.querySelector(".botao-seta.-right");

const grupo_nodes = document.querySelector(".grupo-nc-interno");

var posição_x = 0;

botão_esquerdo.addEventListener("click", () => {
  posição_x -= 5;
  grupo_nodes.style = `transform: translateX(${posição_x}%)`;
});
botão_direito.addEventListener("click", () => {
  posição_x += 5;
  grupo_nodes.style = `transform: translateX(${posição_x}%)`;
});