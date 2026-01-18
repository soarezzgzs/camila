document.getElementById("contatoForm").addEventListener("submit", function(e) {
  e.preventDefault(); // impede o envio normal do formulário

  const nome = document.getElementById("inputNome").value.trim();
  const email = document.getElementById("inputEmail").value.trim();
  const mensagem = document.getElementById("inputMensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos antes de enviar!");
    return;
  }

  const numero = "5535984518736"; // seu número com DDD
  const texto = `Olá, meu nome é ${nome}. Meu email é ${email}. Mensagem: ${mensagem}`;
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(link, "_blank"); // abre o WhatsApp em nova aba
});
