function createCountryCard(country) {
  const card = document.createElement('div');
  card.className = 'bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl';
  card.dataset.id = country.id;

  const flagDiv = document.createElement('div');
  flagDiv.className = 'h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8';
  
  const flagImg = document.createElement('img');
  flagImg.src = country.flag;
  flagImg.alt = `${country.name} bayrog'i`;
  flagImg.className = 'max-h-full max-w-full object-contain drop-shadow-xl';
  flagDiv.appendChild(flagImg);

  const info = document.createElement('div');
  info.className = 'p-6';

  const name = document.createElement('h3');
  name.className = 'text-xl font-bold text-gray-900 mb-2';
  name.textContent = country.name;

  const capital = document.createElement('p');
  capital.className = 'text-gray-600 mb-1 text-sm';
  capital.innerHTML = `<span class="font-semibold text-gray-700">Poytaxt:</span> ${country.capital}`;

  const population = document.createElement('p');
  population.className = 'text-gray-600 mb-4 text-sm';
  population.innerHTML = `<span class="font-semibold text-gray-700">Aholisi:</span> ${country.population.toLocaleString('uz-UZ')}`;

  const regionEl = document.createElement('p');
  regionEl.className = 'text-gray-500 text-xs mb-4 italic';
  regionEl.textContent = country.region;

  const actions = document.createElement('div');
  actions.className = 'flex justify-end gap-3';

  const likeBtn = document.createElement('button');
  likeBtn.className = `p-2 rounded-full transition ${country.isLiked ? 'bg-red-100 text-red-600' : 'hover:bg-red-50 text-gray-500'}`;
  likeBtn.innerHTML = country.isLiked ? '❤️' : '♡';
  likeBtn.title = "Like";

  const saveBtn = document.createElement('button');
  saveBtn.className = `p-2 rounded-full transition ${country.isBasket ? 'bg-green-100 text-green-600' : 'hover:bg-green-50 text-gray-500'}`;
  saveBtn.innerHTML = country.isBasket ? '🔖' : '📑';
  saveBtn.title = "Saqlash";

  actions.appendChild(likeBtn);
  actions.appendChild(saveBtn);

  likeBtn.addEventListener('click', () => {
    country.isLiked = !country.isLiked;
    likeBtn.innerHTML = country.isLiked ? '❤️' : '♡';
    likeBtn.className = `p-2 rounded-full transition ${country.isLiked ? 'bg-red-100 text-red-600' : 'hover:bg-red-50 text-gray-500'}`;
    updateCounts();
  });

  saveBtn.addEventListener('click', () => {
    country.isBasket = !country.isBasket;
    saveBtn.innerHTML = country.isBasket ? '🔖' : '📑';
    saveBtn.className = `p-2 rounded-full transition ${country.isBasket ? 'bg-green-100 text-green-600' : 'hover:bg-green-50 text-gray-500'}`;
    updateCounts();
  });

  info.append(name, capital, population, regionEl, actions);
  card.append(flagDiv, info);

  return card;
}

function renderCountries() {
  const container = document.getElementById('countries-container');
  container.innerHTML = '';

  const searchQuery = document.getElementById('search-input').value.toLowerCase().trim();
  const selectedRegion = document.getElementById('region-filter').value;

  let filtered = countries;

  if (selectedRegion !== 'All') {
    filtered = filtered.filter(c => c.region === selectedRegion);
  }

  if (searchQuery) {
    filtered = filtered.filter(c => 
      c.name.toLowerCase().includes(searchQuery) || 
      c.capital.toLowerCase().includes(searchQuery)
    );
  }

  filtered.forEach(country => {
    container.appendChild(createCountryCard(country));
  });

  updateCounts();
}

function updateCounts() {
  const likes = countries.filter(c => c.isLiked).length;
  const saved  = countries.filter(c => c.isBasket).length;

  document.getElementById('likes-count').textContent = likes;
  document.getElementById('saved-count').textContent = saved;
}

document.getElementById('search-input').addEventListener('input', renderCountries);

document.getElementById('region-filter').addEventListener('change', renderCountries);

window.addEventListener('DOMContentLoaded', () => {
  renderCountries();
});