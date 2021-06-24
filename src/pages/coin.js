$(document).ready(function () {
    getCoins();
    
});

function getCoins() {

    $.getData(
        'GET',
        'Coins/get',
        {},
        function (response) {
            if (response.status) {
                var rows = "";
                
                JSON.parse(response.data).data.forEach(function (data) {
                    rows += "<tr>" +
                        "<td class='align-middle'>" + data.cmc_rank + "</td>" +
                        "<td class='align-middle'>" + $.getDateFormat(data.date_added) + "</td>" +
                        "<td class='align-middle'>" + $.getDateFormat(data.last_updated) + "</td>" +
                        "<td class='align-middle'>" + data.name + "</td>" +
                        "<td class='align-middle'>" + data.quote.USD.price + "</td>" +

                        "</tr>";
                });
                $('#coin-list').html(rows);
            };
       
        }
        );
    }

    function logout() {
    
        localStorage.removeItem("token");  
        window.location= "file:///C:/Users/MONSTER/Documents/GitHub/CoinDashBoard/src/pages/login.html";       
                 
      }