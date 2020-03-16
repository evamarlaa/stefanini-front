var name = document.getElementById('name');
var email = document.getElementById('email');
var gender = document.getElementById('gender');
var birthday = document.getElementById('birthday');
var nationality = document.getElementById('nationality');
var naturality = document.getElementById('naturality');
var cpf = document.getElementById('cpf');

let form = document.getElementById('contact');
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            let data = {};
            let inputs = [].slice.call(e.target.getElementsByTagName('input'));
            inputs.forEach(input => { data[input.id] = input.value });

            fetch('http://localhost:8080/api/person', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": "Basic " + btoa("admin" + ":" + "2512")}
          });
        });