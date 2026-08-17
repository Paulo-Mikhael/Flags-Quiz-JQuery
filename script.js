const api = "https://flagcdn.com/192x144";

// Define o ícone da página com a bandeira do Brasil
$("head link[rel='icon']").attr("href", `${api}/${countries[26].code}.png`);

// Retorna um número inteiro aleatório entre dois valores
function randomInt(min, max) {
  const randomInteger = Math.floor(Math.random() * (max - min) + 1) + 1;
  // Garante que o número aleatório não ultrapasse o valor máximo
  return randomInteger > max ? max : randomInteger;
}

function firstQuestion() {
  const correctCountry = generateOptions();
  generateFlag(correctCountry);
}

// Gera as opções e a bandeira da primeira pergunta
function generateOptions() {
  // Array de países para manipular sem mexer no original
  let countriesArray = countries;
  const optionsCountries = [];

  for (let i = 0; i < 8; i++) {
    const randomIndex = randomInt(0, countriesArray.length - 1);
    const pickedCountry = countriesArray[randomIndex];
    optionsCountries.push(pickedCountry);

    const optionElement = $("<li>").addClass("option");
    const buttonElement = $("<button>").addClass("option-button btn btn-primary").text(pickedCountry.name);
    $(optionElement).append(buttonElement);
    $("#options-container").append(optionElement);

    // Remove o país já escolhido como opção
    countriesArray = countriesArray.filter((country) => country.name !== pickedCountry.name);
  }

  // Retorna uma opção aleatória
  const random = randomInt(0, optionsCountries.length - 1);
  return optionsCountries[random];
}
function generateFlag(country) {
  $("#flag").attr("src", `${api}/${country.code}.png`);
}

firstQuestion();