document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "cb292f1e4400e868b1c08c85";
  let valeurEntree = 0;
  let deviseChoisieEntree = "";
  let deviseChoisieSortie = "";
  let currentExchangeRate = 0;

  const inputMontant = document.getElementById("valeur_entree");
  const devise1Select = document.getElementById("devise1");
  const devise2Select = document.getElementById("devise2");
  const resultDisplay = document.getElementById("result");
  const exchangeRateDisplay = document.getElementById("exchange-rate");
  const lastUpdateDisplay = document.getElementById("last-update");
  const swapButton = document.getElementById("swap-button");
  const quickButtons = document.querySelectorAll(".quick-buttons button");

  inputMontant.addEventListener("input", handleInput);
  devise1Select.addEventListener("change", handleDeviseChange);
  devise2Select.addEventListener("change", handleDeviseChange);
  swapButton.addEventListener("click", swapDevises);
  quickButtons.forEach((button) => {
    button.addEventListener("click", handleQuickConvert);
  });

  let debounceTimer;
  function handleInput() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      valeurEntree = parseFloat(inputMontant.value) || 0;
      if (valeurEntree > 0 && deviseChoisieEntree && deviseChoisieSortie) {
        fetchExchangeRate();
      } else {
        resetResult();
      }
    }, 500);
  }

  function handleDeviseChange(event) {
    if (event.target.id === "devise1") {
      deviseChoisieEntree = event.target.value;
    } else {
      deviseChoisieSortie = event.target.value;
    }

    if (valeurEntree > 0 && deviseChoisieEntree && deviseChoisieSortie) {
      fetchExchangeRate();
    }
  }

  function swapDevises() {
    const tempDevise = deviseChoisieEntree;
    deviseChoisieEntree = deviseChoisieSortie;
    deviseChoisieSortie = tempDevise;

    devise1Select.value = deviseChoisieEntree;
    devise2Select.value = deviseChoisieSortie;

    swapButton.style.transform = "rotate(180deg)";
    setTimeout(() => {
      swapButton.style.transform = "rotate(0deg)";
    }, 300);

    if (valeurEntree > 0 && deviseChoisieEntree && deviseChoisieSortie) {
      fetchExchangeRate();
    }
  }

  function handleQuickConvert(event) {
    const amount = parseFloat(event.target.dataset.amount);
    inputMontant.value = amount;
    valeurEntree = amount;

    if (deviseChoisieEntree && deviseChoisieSortie) {
      fetchExchangeRate();
    }
  }

  async function fetchListedCurrencies() {
    try {
      const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        displayCurrencies(data);
      } else {
        throw new Error("Erreur lors de la récupération des devises");
      }
    } catch (error) {
      showError("Impossible de charger les devises");
      console.error(error);
    }
  }

  async function fetchExchangeRate() {
    try {
      showLoading();
      const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${deviseChoisieEntree}/${deviseChoisieSortie}/${valeurEntree}`;
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        displayResult(data);
        updateLastUpdate();
        currentExchangeRate = data.conversion_rate;
        updateExchangeRate();
      } else {
        throw new Error("Erreur lors de la conversion");
      }
    } catch (error) {
      showError("Erreur lors de la conversion");
      console.error(error);
    } finally {
      hideLoading();
    }
  }

  function displayCurrencies(data) {
    const currencies = Object.keys(data.conversion_rates);
    const fragments = {
      devise1: document.createDocumentFragment(),
      devise2: document.createDocumentFragment(),
    };

    currencies.forEach((currency) => {
      ["devise1", "devise2"].forEach((selectId) => {
        const option = document.createElement("option");
        option.value = currency;
        option.textContent = `${currency} - ${getCurrencyName(currency)}`;
        fragments[selectId].appendChild(option.cloneNode(true));
      });
    });

    devise1Select.appendChild(fragments.devise1);
    devise2Select.appendChild(fragments.devise2);

    devise1Select.value = "EUR";
    devise2Select.value = "USD";
    deviseChoisieEntree = "EUR";
    deviseChoisieSortie = "USD";
  }

  function displayResult(data) {
    const formattedResult = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: deviseChoisieSortie,
    }).format(data.conversion_result);

    resultDisplay.textContent = formattedResult;
    resultDisplay.style.color = "var(--text)";
  }

  function updateExchangeRate() {
    if (currentExchangeRate) {
      exchangeRateDisplay.textContent = `1 ${deviseChoisieEntree} = ${currentExchangeRate.toFixed(
        4
      )} ${deviseChoisieSortie}`;
    }
  }

  function updateLastUpdate() {
    const now = new Date();
    lastUpdateDisplay.textContent = `Dernière mise à jour: ${now.toLocaleTimeString()}`;
  }

  function showLoading() {
    resultDisplay.textContent = "Chargement...";
    resultDisplay.style.color = "var(--text-light)";
  }

  function hideLoading() {
    if (resultDisplay.textContent === "Chargement...") {
      resetResult();
    }
  }

  function showError(message) {
    resultDisplay.textContent = message;
    resultDisplay.style.color = "var(--error)";
  }

  function resetResult() {
    resultDisplay.textContent = "--";
    resultDisplay.style.color = "var(--text)";
    exchangeRateDisplay.textContent = "Taux de change: --";
    lastUpdateDisplay.textContent = "Dernière mise à jour: --";
  }

  function getCurrencyName(code) {
    const currencies = {
      EUR: "Euro",
      USD: "Dollar américain",
      GBP: "Livre sterling",
      JPY: "Yen japonais",
    };
    return currencies[code] || code;
  }

  fetchListedCurrencies();
});
