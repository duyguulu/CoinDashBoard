
var apiurl = 'https://localhost:44337/';
var baseHref = 'file:///C:/Users/MONSTER/Desktop/DashBoard/index.html';
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
                window.location.href = "file:///C:/Users/MONSTER/Desktop/Dashboard/src/pages/login.html";
        });
    }

    $.getDateFormat= function formatDate(dateString)
    {
        // dateString = '2020-04-03 20:30:55';
        var allDate = dateString.split('T');
        var thisDate = allDate[0].split('-');
        var thisTime = allDate[1].split(':');
        var newDate = [thisDate[2],thisDate[1],thisDate[0] ].join("-");

        var hour = thisTime[0];
        var hour =hour < 10 ? "" + hour : hour;
        var min = thisTime[1] ;
        var sec = thisTime[2] ;
        var newTime = hour + ':' + min ;

        return newDate + ' ' + newTime;
    }
     
    }

);