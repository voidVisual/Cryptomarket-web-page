const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50';
const cryptoList = document.getElementById('crypto-list');
const searchInput = document.getElementById('search-input');

async function fetchPriceData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    filterCoins(data);
  } catch (error) {
    console.error(error);
  }
}

function filterCoins(data) {
  data.forEach(coin => {
    const html = `
      <li>
        <h3 class="crypto-name">${coin.name}</h3>
        <p class="crypto-price">$${parseFloat(coin.current_price).toFixed(2)}</p>
      </li>
    `;
    cryptoList.innerHTML += html;
  });
}

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toUpperCase();
  const listItems = cryptoList.getElementsByTagName('li');
  for (let i = 0; i < listItems.length; i++) {
    const txtValue = listItems[i].textContent || listItems[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      listItems[i].style.display = "";
    } else {
      listItems[i].style.display = "none";
    }
  }
});

fetchPriceData();