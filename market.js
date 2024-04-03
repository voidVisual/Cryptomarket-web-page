const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cbitcoin-cash%2Cstellar%2Ccardano&vs_currencies=usd';
const marketData = document.querySelector('.market-data');
const gainerTable = document.querySelector('.gainer-table');
const loserTable = document.querySelector('.loser-table');

async function fetchMarketData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayMarketData(data);
    getTopGainers(data);
    getTopLosers(data);
  } catch (error) {
    console.error(error);
  }
}

function displayMarketData(data) {
  Object.entries(data).forEach(([key, value]) => {
    const html = `
      <div class="market-item">
        <h3 class="market-name">${key}</h3>
        <p class="market-value">$${parseFloat(value.usd).toFixed(2)}</p>
        <p class="market-percent">${parseFloat(value.usd_24h_change).toFixed(2)}%</p>
      </div>
    `;
    marketData.innerHTML += html;
  });
}

function getTopGainers(data) {
  const sortedGainers = Object.values(data).reduce((acc, cur) => {
    return Object.entries(cur).sort((a, b) => b[1].usd_24h_change - a[1].usd_24h_change).slice(0, 5);
  }, []);

  sortedGainers.forEach(([key, value]) => {
    const html = `
      <tr>
        <td>${key}</td>
        <td>$${parseFloat(value.usd).toFixed(2)}</td>
        <td>${parseFloat(value.usd_24h_change).toFixed(2)}%</td>
      </tr>
    `;
    gainerTable.innerHTML += html;
  });
}

function getTopLosers(data) {
  const sortedLosers = Object.values(data).reduce((acc, cur) => {
    return Object.entries(cur).sort((a, b) => a[1].usd_24h_change - b[1].usd_24h_change).slice(0, 5);
  }, []);

  sortedLosers.forEach(([key, value]) => {
    const html = `
      <tr>
        <td>${key}</td>
        <td>$${parseFloat(value.usd).toFixed(2)}</td>
        <td>${parseFloat(value.usd_24h_change).toFixed(2)}%</td>
      </tr>
    `;
    loserTable.innerHTML += html;
  });
}

fetchMarketData();