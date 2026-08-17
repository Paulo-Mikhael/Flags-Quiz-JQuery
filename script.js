const api = "https://flagcdn.com/192x144";

// Define o ícone da página com a bandeira do Brasil
$("head link[rel='icon']").attr("href", `${api}/${countries[26].code}.png`);

// Retorna um número inteiro aleatório entre dois valores
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + 1;
}

// Gera as opções de países
function options() {
  // Array de países para manipular sem mexer no original
  let countriesArray = countries;
  for (let i = 0; i < 8; i++) {
    const randomIndex = randomInt(0, countriesArray.length - 1);
    const optionElement = $("<li>").addClass("option");
    const buttonElement = $("<button>").addClass("option-button btn btn-primary").text(countriesArray[randomIndex].name);
    $(optionElement).append(buttonElement);
    $("#options-container").append(optionElement);

    // Remove um país já escolhido como opção
    countriesArray = countriesArray.filter((country) => country.name !== countriesArray[randomIndex].name);
  }
}

options();