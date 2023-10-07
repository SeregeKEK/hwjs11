async function fetchData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error ('Не удалось получить сведения из data.json')
        }
        const data = await response.json()
        const cardDiv = document.querySelector('.featured-items');
        data.forEach(({imgUrl, cardTitle, cardSubtitle, prise}) => {
        const productCard =`
        <a href="#" class="product-card">
            <div class="product-card__img">
                <img class="product-card__image" src="${imgUrl}" alt="products">
                <div class="product-card__btn">
                    <img class="product-card__icon" src="img/Forma1copy.svg" alt="icon">Add to Cart
                </div>
            </div>
            <h3 class="product-card__title">${cardTitle}</h3>
            <p class="product-card__text">${cardSubtitle}</p>
            <span class="product-card__subtext">$${prise}</span>
        </a>`;
        cardDiv.insertAdjacentHTML('beforeend', productCard)
        });
        
    } catch (error){
        console.log(error);
    }
}

fetchData()
