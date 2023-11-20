
function updateColors() {
    const nameInput = document.getElementById('name');
    const birthYearInput = document.getElementById('birthYear');
    const currentYearInput = document.getElementById('currentYear');
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const ageSpan = document.getElementById('age');
    const selectedGender = Array.from(genderInputs).find(input => input.checked);
    const backgroundContainer = document.querySelector('.container');

    if (nameInput.value && birthYearInput.value && currentYearInput.value && selectedGender) {
        const name = nameInput.value;
        const birthYear = parseInt(birthYearInput.value);
        const currentYear = parseInt(currentYearInput.value);
        const age = currentYear - birthYear;

        if (selectedGender.value === 'Masculino') {
            backgroundContainer.classList.add('custom-bg-blue');
            backgroundContainer.classList.remove('custom-bg-pink');
            backgroundContainer.classList.remove('custom-bg-red');
        } else if (selectedGender.value === 'Feminino') {
            backgroundContainer.classList.add('custom-bg-red');
            backgroundContainer.classList.remove('custom-bg-blue');
            backgroundContainer.classList.remove('custom-bg-pink');
        } else {
            backgroundContainer.classList.add('custom-bg-pink');
            backgroundContainer.classList.remove('custom-bg-blue');
            backgroundContainer.classList.remove('custom-bg-red');
        }

        ageSpan.innerText = `Idade: ${age} anos`;
        ageSpan.title = `Idade calculada: ${age} anos`;
    } else {
        backgroundContainer.classList.remove('custom-bg-blue');
        backgroundContainer.classList.remove('custom-bg-red');
        backgroundContainer.classList.remove('custom-bg-pink');
        ageSpan.innerText = '';
        ageSpan.title = '';
    }
}

document.getElementById('name').addEventListener('input', updateColors);
document.getElementById('birthYear').addEventListener('input', updateColors);
document.getElementById('currentYear').addEventListener('input', updateColors);
const genderInputs = document.querySelectorAll('input[name="gender"]');
genderInputs.forEach(input => input.addEventListener('input', updateColors));


document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

  
    const name = document.getElementById('name').value;
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const birthYear = parseInt(document.getElementById('birthYear').value);


    const gender = genderInput ? genderInput.value : "Nenhuma opção selecionada";

   
    const checkboxes = document.querySelectorAll('input[name="interest"]:checked');
    let interests = Array.from(checkboxes).map(checkbox => checkbox.value);

   
    if (interests.length === 0) {
        interests = ["Nenhuma opção selecionada"];
    }

  
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `Nome: ${name}<br>Gênero: ${gender}<br>Ano de Nascimento: ${birthYear}<br>Gostos: ${interests.join(', ')}`;
});
