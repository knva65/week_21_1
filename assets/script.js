postButton.onclick = function(event) {
event.preventDefault();
let user = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
}
console.log(user);
fetch("https://httpbin.org/post",{
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error));
}







let errors = [];
function checkValidity(input) {
    let validity = input.validity;
    if(validity.valueMissing) { errors.push('Поле ' + input.placeholder + ' не заполнено'); }
    if(validity.patternMismatch) { errors.push(input.placeholder + ' - неверный формат заполнения'); }
    if(validity.rangeOverflow) { let max = input.max; errors.push('Максимальное значение не может быть больше чем ' + max); }
    if(validity.rangeUnderflow) { let min = input.min; errors.push('Минимальное значение не может быть больше чем ' + min); }
}

function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll("input");

    for(let input of inputs) {
        checkValidity(input);
    }

    document.getElementById('errorMessage').innerHTML=errors.join('. </br>');
}

