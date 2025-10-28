 // Shop
    function renderProducts() {
      productWrapper.innerHTML = ""; // clear old content

      const visibleProducts = arrayOfProducts.slice(0, 16);

    // const visibleComments = arrayOfComments.slice(1, 3); 0, 1, 2 1, 2

      visibleProducts.forEach(product => {
          const shop = document.createElement("shop-display");
        //   card.classList.add("card");
        //   card.classList.add("product-card");

       
     

          card.innerHTML = `
        <div class="shop-hero" style="width: 250px">
          <img class="shop-img" src=${shop.images[0]} alt="Card image" />
          <div class="shop-display">
            <p class="shop-price">₦ ${shop.price}</p>
            <p class="shop-text">${shop.title}</p>

            <div class="d-flex lower-links">
                <div class="rating-wrapper d-flex">
                    <img src="https://img.icons8.com/?size=100&id=85842&format=png&color=FFFFFF" alt="rating icon" class="rating-img"/>
                    <span>${product.rating}</span>

                </div>

                <div class="d-flex">
                    <span>Sold:</span>
                    <span>${product.stock}</span>

                </div>

                <div>
                    <button class="goto-button">
                        <img src="https://img.icons8.com/?size=100&id=10242&format=png&color=FFFFFF" alt="gotoproduct page" class="goto-img"/>
                    </button>
                </div>

            </div>
           
          </div>
          </div>
        `;

        productWrapper.appendChild(card);
      });

      
    }


    