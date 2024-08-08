const accessKey = "0a446907e618381ae59a22c976c78a8c"

async function getData() {
    fetch(`http://api.coinlayer.com/live?access_key=${accessKey}&expand=1&symbols=BTC,ETH,LINK,ADA,USDT/rates`)
    .then((data) =>{
        return data.json();
    }).then((objectData) => {
        console.log(objectData[0].rate);
        let tableData="";
        objectData.map((values)=>{
            tableData += `<tr>
            <td>${values.rates>rate}</td>
            <td>${values.rates>high}</td>
            <td>${values.rates>low}</td>
            <td>${values.rates>cap}</td>
            <td>${values.rates>sup}</td>
            </tr>`;
        });
        document.getElementById("table_body").innerHTML=tableData;
    });

};



