document.getElementById("contatoForm").addEventListener("submit", function(e) {
<<<<<<< HEAD
  e.preventDefault(); // impede o envio normal do formulário
=======
  e.preventDefault();
>>>>>>> 810c2de630bd405ee1ee8c055372b0662d87d630

  const nome = document.getElementById("inputNome").value.trim();
  const email = document.getElementById("inputEmail").value.trim();
  const mensagem = document.getElementById("inputMensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos antes de enviar!");
    return;
  }

<<<<<<< HEAD
  const numero = "5535984518736"; // seu número com DDD
  const texto = `Olá, meu nome é ${nome}. Meu email é ${email}. Mensagem: ${mensagem}`;
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(link, "_blank"); // abre o WhatsApp em nova aba
});

const menuIcon = document.getElementById('mobile-menu-icon');
const menuList = document.getElementById('mobile-menu');

// Verifica se os elementos existem antes de adicionar o evento
if (menuIcon && menuList) {
    menuIcon.addEventListener('click', function() {
        menuList.classList.toggle('active');
    });
}
=======
  const numero = "553584431748";
  const texto = `Olá, meu nome é ${nome}. Meu email é ${email}. Mensagem: ${mensagem}`;
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(link, "_blank");
});
>>>>>>> 810c2de630bd405ee1ee8c055372b0662d87d630
