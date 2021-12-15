const productList = {
  products: [
    {
      title: "A sky",
      imageUrl:
        "https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg",
      price: 19.99,
      description: "A soft sky",
    },
    {
      title: "A city",
      imageUrl:
        "https://cdnb.artstation.com/p/assets/images/images/024/538/827/original/pixel-jeff-clipa-s.gif?1582740711",
      price: 19.99,
      description: "A fantasy city",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
        <img src = "${prod.imageUrl}" alt = "${prod.title}">
            <div class = "product-item__content">
                <h2>${prod.title}</h2>
                <h3>\$${prod.price}</h3>
                <p>${prod.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
      `;
      prodList.append(prodEl);
    }

    renderHook.append(prodList);
  },
};

productList.render();
