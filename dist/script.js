var name = document.getElementById('name');
var email = document.getElementById('email');
var gender = document.getElementById('gender');
var birthday = document.getElementById('birthday');
var nationality = document.getElementById('nationality');
var naturality = document.getElementById('naturality');
var cpf = document.getElementById('cpf');

form.addEventListener('submit', function(e) {
    var url = "http://localhost:8080/api/person";

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);

    xhttp.onreadystatechange = function() {//Função a ser chamada quando a requisição retornar do servidor
        if ( xhttp.readyState == 4 && xhttp.status == 200 ) {//Verifica se o retorno do servidor deu certo
            console.log(xhttp.responseText);
        }
    }

    xhttp.send(); //A execução do script CONTINUARÁ mesmo que a requisição não tenha retornado do servidor   
});