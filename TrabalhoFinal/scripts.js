const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonType = document.querySelector('.pokemon__type');
const pokemonType2 = document.querySelector('.pokemon__type2');
const pokemonImage = document.querySelector('.pokemon__image');
const pokemonAltura = document.querySelector('.pokemon__altura');
const pokemonPeso = document.querySelector('.pokemon__peso');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
}

const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = 'Loading...';
  pokemonNumber.innerHTML = '';

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonAltura.innerHTML = data.height;
    pokemonPeso.innerHTML = data.weight;
    pokemonType.innerHTML = data['types']['0']['type']['name'];
    if(data['types']['1']){
        pokemonType2.innerHTML = data['types']['1']['type']['name'];
        if(data['types']){
            pokemonType2.style.display = data['types']['0']['type']['name'];
        }
        }else{
            pokemonType2.innerHTML = '';
        }
    pokemonImage.src = data['sprites']['front_default'];
    input.value = '';
    searchPokemon = data.id;
  } else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Not found :c';
    pokemonNumber.innerHTML = '';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

buttonNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);
