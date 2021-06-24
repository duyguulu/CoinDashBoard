function login() {
    var username = $('#username').val();
    var password = $('#password').val();
    console.log(username);
    console.log(password);
    var data = {
        'username': username,
        'password': password
    }
    //console.log(data);
    $.getData(
        'POST',
        'Auth/login',
        data,
        function (response) {
            console.log(response)
            localStorage.setItem("token", response.token);           
            

            //Swal.fire("Yönlendiriliyorsunuz", "Giriş Başarılı Yönlendiriliyorsunuz ", "success");

            window.location = "file:///C:/Users/MONSTER/Documents/GitHub/CoinDashBoard/src/pages/coin.html";
            console.log(response.data.token);
        }

        //Deneme

    );
}

