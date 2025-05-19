const products = [
    { id: 1, name: 'Apple iPhone 14 Pro Max', category: 'electronics', price: 1099.99, rating: 4.5, image: 'https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UF1000,1000_QL80_.jpg' },
    { id: 2, name: 'Plain Round Neck  Regular  for men', category: 'clothing', price: 27.90, rating: 3.0, image: 'https://m.media-amazon.com/images/I/51niRCZCaaL._SX679_.jpg' },
    { id: 3, name: 'The Secret by Rhonda Byrne in English New Edition', category: 'books', price: 20.99, rating: 5.0, image: 'https://m.media-amazon.com/images/I/81nJqVatw5L._SL1500_.jpg' },
    { id: 4, name: 'iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life.', category: 'electronics', price: 1299.99, rating: 4.7, image: 'https://m.media-amazon.com/images/I/61zwK7mmLtL._SL1500_.jpg' },
    { id: 5, name: 'Apple iPad Air 13 (M2): Liquid Retina Display, 128GB, Landscape 12MP Front Camera / 12MP Back Camera, Wi-Fi 6E', category: 'electronics', price: 799.99, rating: 4.8, image: 'https://m.media-amazon.com/images/I/71OYkps4I2L._SL1500_.jpg' },
    { id: 6, name: "Symbol Premium Men's Wrinkle-Resistant Regular Fit Cotton Formal Shirt", category: 'clothing', price: 30.31, rating: 4.0, image: "https://m.media-amazon.com/images/I/81W5dhfd7KL._SX569_.jpg" },
    { id: 7, name: 'Apple Macbook 12 Inch', category: 'electronics', price: 1148.56, rating: 5.0, image: 'https://m.media-amazon.com/images/I/41q5iPezP2L._SL1024_.jpg' },
    { id: 8, name: 'Casual Wear Full Sleeve Top for Women', category: 'clothing', price: 19.99, rating: 4.0, image: 'https://m.media-amazon.com/images/I/71dyd86XxeL._SX679_.jpg' },
    { id: 9, name: "Blueprint for Billions: Mastering India's Equity Market", category: 'books', price: 15.99, rating: 4.8, image: 'https://m.media-amazon.com/images/I/61nb-A4JQQL._SL1360_.jpg' }
];

function applyFilters() {
    const category = document.getElementById('categoryFilter').value;
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;
    const minRating = parseFloat(document.getElementById('ratingFilter').value) || 0;
    const sortBy = document.getElementById('sortBy').value;

    let filtered = products.filter(product =>
        (!category || product.category === category) &&
        product.price >= minPrice &&
        product.price <= maxPrice &&
        product.rating >= minRating
    );

    filtered.sort((a, b) => {
        switch (sortBy) {
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            case 'rating-desc':
                return b.rating - a.rating;
            default:
                return 0;
        }
    });

    renderProducts(filtered);
}

function renderProducts(products) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <p class="product-rating">Rating: ${'*'.repeat(Math.floor(product.rating))}${' '.repeat(5 - Math.floor(product.rating))}</p>
            </div>
        </div>
    `).join('');
}

renderProducts(products);
