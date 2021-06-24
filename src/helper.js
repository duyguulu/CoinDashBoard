
var apiurl = 'https://localhost:44337/';
$(document).ready(function () {
    
    $.getData = function (method, page, _data, callBack) {
        console.log(method)
        var settings = {
            "url": apiurl + page,
            "method": method,
            "timeout": 0,
            "data": JSON.stringify(_data),
            "headers": {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('token')
            }
            
        };
        $.ajax(settings).done(function (response) {
            
            if (!response.status) {
                alert("Kullanıcı adı veya parolası yanlış!");
            }
            else{
                callBack(response);
            }
        }).catch((err)=>{
            if(err.status===401)
                window.location.href = "file:///C:/Users/MONSTER/Documents/GitHub/CoinDashBoard/src/pages/login.html";
        });
    }
     
    }

);