const accessKey = "0a446907e618381ae59a22c976c78a8c"

const dataFeed = {
    "BTC": "Bitcoin",
    "ETH": "Ethereum",
    "LINK": "Chainlink",
    "ADA": "Cardano",
    "XRP": "XRP"
};

// console.log(dataFeed);

async function getData() { // setting a function to bring back the api data
    try {
        const response = await fetch(`http://api.coinlayer.com/live?access_key=${accessKey}&expand=1&symbols=BTC,ETH,LINK,ADA,XRP`) //Accesses the coinlayer api using my accessKey provided by coinlayer 
        const data = await response.json()

        return data.rates;

    }

    catch (error) {
        console.error('Could not fetch data:', error);
    }

}

function submitData(rates) {

    let tableData = "";
    const cryptos = ["BTC", "ETH", "ADA", "LINK", "XRP"];

    cryptos.forEach(crypto => {

        const { rate, high, low, cap, sup } = rates[crypto];
        const name = dataFeed[crypto];


        tableData += `
            <tr>
                <td><img src="images/${crypto}.png" alt="${crypto} logo" height = "40 px" width = "40 px"</td>
                <th class="scope" style="color:white;">${name}</th>
                <td style = "color: white;">${rate}</td>
                <td style = "color: white;">${high}</td>
                <td style = "color: white;">${low}</td>
                <td style = "color: white;">${cap}</td>
                <td style = "color: white;">${sup}</td>
            </tr>
            `;
    });

    document.getElementById("table-body").innerHTML = tableData;

}

async function renderTable() {
    const rates = await getData();
    submitData(rates);
}


//Before submitting the data feed and the HTML data insertion should be split into two separate functions.
