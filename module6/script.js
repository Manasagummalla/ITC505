const productForm = document.getElementById('productForm');
const productsListSection = document.getElementById('productsListSection');
const productsList = document.getElementById('productsList');

let products = []; // Array to store products

// Function to display products
function displayProducts() {
    productsList.innerHTML = '';
    if (products.length === 0) {
        productsListSection.style.display = 'none'; // Hide products list if empty
        return;
    }

    productsListSection.style.display = 'block'; // Show products list

    products.forEach((product) => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p><strong>Brand:</strong> ${product.brand}</p>
            <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
            <p><strong>Description:</strong> ${product.description}</p>
            <img src="${product.image}" alt="${product.name}" style="max-width: 100%; height: auto;">
        `;
        productsList.appendChild(productItem);
    });
}

// Function to handle form submission
productForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form values
    const name = productForm.name.value;
    const brand = productForm.brand.value;
    const price = parseFloat(productForm.price.value);
    const description = productForm.description.value;
    const image = productForm.image.value;

    // Basic form validation
    if (!name || !brand || !price || !description || !image) {
        alert('Please fill in all fields.');
        return;
    }

    // Create a new product object
    const newProduct = {
        name: name,
        brand: brand,
        price: price,
        description: description,
        image: image
    };

    products.push(newProduct);

    displayProducts();

    productForm.reset();
});
