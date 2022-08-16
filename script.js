const divETH = document.getElementById("divETH")
const divBTC = document.getElementById("divBTC")
const divXLM = document.getElementById("divXLM")

setInterval(()=>{
    llamarETH()
    llamarBTC()
    llamarXLM()
}, 5000)

function llamarETH(){
    fetch("https://criptoya.com/api/bitstamp/eth")
    .then(res => res.json())
    .then(({last})=>{
        divETH.innerHTML =`
        <div> 
            <p>Precio ETH: USD ${last} </p>
        </div>
        `
    })
}
function llamarBTC(){
    fetch("https://criptoya.com/api/bitstamp/btc")
    .then(res => res.json())
    .then(({last})=>{
        divBTC.innerHTML =`
        <div> 
            <p>Precio BTC: USD ${last} </p>
        </div>
        `
    })
}
function llamarXLM(){
    fetch("https://criptoya.com/api/bitstamp/xlm")
    .then(res => res.json())
    .then(({last})=>{
        divXLM.innerHTML =`
        <div> 
            <p>Precio XLM: USD ${last} </p>
        </div>
        `
    })
}

llamarETH()
llamarBTC()
llamarXLM()