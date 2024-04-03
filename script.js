
  
  
  //bitcoin
async function bitcoin() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
    const data = await response.json();
    const cryptoList = document.getElementById('bitcoinprice');
    cryptoList.innerHTML = `
       <p>$${data.bitcoin.usd}</p>
    `;
}
setInterval(bitcoin, 10000);
bitcoin();

//ethereum
async function ethereum() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
    const data = await response.json();
    const cryptoList = document.getElementById('ethereumprice');
    cryptoList.innerHTML = `
       <p>$${data.ethereum.usd}</p>
    `;
}
setInterval(ethereum, 10000);
ethereum();

//Doge
async function Doge() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd');
    const data = await response.json();
    const cryptoList = document.getElementById('dogeprice');
    cryptoList.innerHTML = `
        <p>$${data.dogecoin.usd}</p>
    `;
}
setInterval(Doge, 10000);
Doge();
