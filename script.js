const formulario = document.getElementById("formulario");
const inputNome = document.getElementById("nome");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // evita que a página recarregue

  const nome = inputNome.value.trim();

  if (nome) {
    mensagem.textContent = `Olá, ${nome}! Seja bem-vindo à página do aluno(a):`;
    
  } else {
    mensagem.textContent = "Por favor, insira seu nome.";
   
  }
});
