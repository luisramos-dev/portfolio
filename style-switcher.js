/* Theme Dark and Light Mode */
const dayNight = document.querySelector(".day-night");
const gamemodeImg = document.querySelector(".gamemode img"); // Seleciona a imagem

// Manipulador de evento para alternar entre o tema escuro e claro
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

    // Alterna a imagem do botão
    if (document.body.classList.contains("dark")) {
        gamemodeImg.src = "secret-white.png"; // Imagem branca
    } else {
        gamemodeImg.src = "secret.png"; // Imagem preta
    }
});

// Verifica ao carregar a página e ajusta a imagem corretamente
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
        gamemodeImg.src = "secret-white.png"; // Define imagem branca
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
        gamemodeImg.src = "secret.png"; // Define imagem preta
    }
});

// Código para o botão "gamemode" que **não altera o tema** e apenas altera a fonte
const gamemodeButton = document.getElementById('gamemode');

// Adiciona o evento de clique para alternar a fonte
gamemodeButton.addEventListener('click', () => {
    // Alterna apenas a fonte, sem afetar o tema
    document.body.classList.toggle('press-start-2p');
});
