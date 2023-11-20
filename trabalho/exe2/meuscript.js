function displayGenreResult() {
    const selectElement = document.getElementById('genre');
    const selectedGenre = selectElement.value;

    const resultElement = document.getElementById('result');
    
    const locationSelect = document.getElementById('location');
    const selectedLocation = locationSelect.value;

    

    let resultMessage = "Seu gênero de filme favorito é: " + selectedGenre;

    if (selectedGenre === 'comedia') {
        resultMessage += "<br><br>No zoológico, um canguru vivia fugindo do cercado. Os tratadores sabiam que ele pulava alto e construíram uma cerca de 3 metros. Não adiantou, porque o canguru sempre fugia. Então, ergueram uma cerca de 6 metros. E ele saiu de novo. Quando a cerca já estava com 12 metros, o camelo do cercado vizinho perguntou ao canguru: - Até que altura você acha que eles vão? O canguru respondeu: - Mais de 300, a menos que alguém tranque o portão à noite.";
    }

    if (selectedGenre === 'terror') {
        resultMessage += "<br><br><span class='terror'>Faça silêncio, ele pode estar te observando agora mesmo!!</span>";
    }

    if (selectedGenre === 'ficção') {
        resultMessage += "<br><br> <a href='https://www.bing.com/maps?q=Groom+Lake%2C+um+salar+no estado de Nevada google mapas&FORM=HDRSC6&cp=37.266681%7E-115.800202&lvl=20.6&style=h' target='_blank'> Groom Lake</a>";
    }

    if (selectedGenre === 'animação') {
        resultMessage += "<br><br> <a href='https://www.youtube.com/watch?v=pqjDAfdoK_M&ab_channel=MARCOSJOGOSOUFILME' target='_blank'> nos somos o amendo bobo</a>";
    }

    if (selectedGenre === 'drama') {
        resultMessage += "<br><br> <a href='https://www.youtube.com/watch?v=2cxmQYFA67Q&ab_channel=PYKURUDOMEMES' target='_blank'>choremos</a>";
    }
    if (selectedGenre === 'ação') {
        resultMessage += "<br><br> <a href='https://www.youtube.com/watch?v=LZez19EFRL8&ab_channel=ThiagoVinny' target='_blank'>pancadaria de qualidade</a>";
    }


    resultElement.innerHTML = resultMessage;
}

function displayFoodResults() {
    const foodCheckboxes = document.querySelectorAll('input[type="checkbox"][name="food"]:checked');
    const selectedFoods = Array.from(foodCheckboxes).map(checkbox => checkbox.value);
    const resultElementFood = document.getElementById('foodResult');

    if (selectedFoods.length > 0) {
        let resultMessageFood = "Alimentos favoritos: " + selectedFoods.join(', ');
        resultElementFood.innerHTML = resultMessageFood;
    } else {
        resultElementFood.innerHTML = "Nenhum alimento selecionado.";
    }
}

function chooseLocation() {
    const selectElement = document.getElementById('location');
    const selectedLocation = selectElement.value;
    const locationMessage = "Você prefere assistir na " + selectedLocation + ".";
    const locationResult = document.getElementById('locationResult');

    locationResult.innerHTML = locationMessage;
}
