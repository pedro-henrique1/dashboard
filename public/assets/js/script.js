const button = document.getElementById("buttonPesquisa");
const inputPesquisa = document.getElementById("inputPesquisa");

button.addEventListener("click", () => {
  limpaInput();
});

function limpaInput() {
  inputPesquisa.value = "";
}
