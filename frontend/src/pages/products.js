document.addEventListener('DOMContentLoaded', () => {
    const addProductForm = document.getElementById('addProductForm');
    const productList = document.getElementById('productList');

    // Debug: Check if form exists and add event listener
    if (addProductForm) {
        addProductForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const productId = document.getElementById('productId').value;
            const productName = document.getElementById('productName').value;
            const productPhoto = document.getElementById('productPhoto').files[0];
            
            if (productId && productName && productPhoto) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const products = JSON.parse(localStorage.getItem('products')) || [];
                    products.push({
                        id: productId,
                        name: productName,
                        photo: e.target.result
                    });
                    localStorage.setItem('products', JSON.stringify(products));
                    alert('Product added successfully!');
                    addProductForm.reset();
                };
                reader.readAsDataURL(productPhoto);
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    function displayProducts() {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        
        // Debug: Log the products array
        console.log('Loaded products:', products);

        productList.innerHTML = '';
        if (products.length > 0) {
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.className = 'product-item';
                productItem.innerHTML = `
                    <img src="${product.photo}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>ID: ${product.id}</p>
                `;
                productList.appendChild(productItem);
            });
        } else {
            // If no products are found, display a message
            productList.innerHTML = '<p>No products found.</p>';
        }
    }

    if (productList) {
        displayProducts();
    }
});
