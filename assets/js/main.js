const products = [
  {
    id: 1,
    name: "Life Shoes",
    price: 20.00,
    stock: 20,
    amount: 0,
    image: "./assets/img/zapato.png"
  },
  {
    id: 2,
    name: "Sport Shoes",
    price: 25.00,
    stock: 15,
    amount: 0,
    image: "./assets/img/shoes-black.png"
  },
  {
    id: 3,
    name: "Formal Shoes",
    price: 30.00,
    stock: 10,
    amount: 0,
    image: "./assets/img/shoes-black.png"
  },
  {
    id: 4,
    name: "Casual Shoes",
    price: 22.00,
    stock: 25,
    amount: 0,
    image: "./assets/img/shoes-black.png"
  },
  {
    id: 5,
    name: "Hiking Shoes",
    price: 35.00,
    stock: 12,
    amount: 0,
    image: "./assets/img/shoes-black.png"
  },
  {
    id: 6,
    name: "Sport Shoes",
    price: 28.00,
    stock: 18,
    amount: 0,
    image: "./assets/img/shoes-black.png"
  },
  {
    id: 7,
    name: "Dance Shoes",
    price: 32.00,
    stock: 22,
    amount: 0,
    image: "./assets/img/shoes-black.png"
  },
  {
    id: 8,
    name: "Work Shoes",
    price: 40.00,
    stock: 8,
    amount: 0,
    image: "./assets/img/shoes-black.png"
  },
]

var shopping_card = [];

/**
 *Carga los productos
 *
 */
function loadingProducts() {
  const productos = document.getElementById("productos");

  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.classList.add("card-product");
    card.id = "card-" + product.id;
    card.innerHTML = `
    <div>

      <img src="${product.image}">
       
      <div class="flex flex-col  gap-1 md:gap-3 mt-8 md:mt-0">
        <div class="flex justify-end gap-2 ">
          <button onclick="changeColorProduct(${index},'--shoes-blue')" class="circle" style=" background-color: var(--shoes-blue);"></button>
          <button onclick="changeColorProduct(${index},'--shoes-green')" class="circle" style=" background-color: var(--shoes-green);"></button>
          <button onclick="changeColorProduct(${index},'--shoes-black')" class="circle" style=" background-color: var(--shoes-black);"></button>
        </div>
        <h1 class="font-audiowide text-base sm:text-3xl txt-black">${product.name}</h1>

        <div class="flex justify-between align-center">
          <p id=amount-${product.id} style="color: rgb(105, 105, 105);">cantidad ${product.amount}</p>
          <p class="font-semibold text-xl txt-black">${product.price}$</p>
        </div>

        <div class="flex justify-between gap-3">
          <button onclick="cart(${this})" type="button" class="btn-general w-full">Comprar</button>
          <button onclick="addToCart(${index})" type="button" class="btn-general w-30">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>

      </div>
    </div>
    `;
    productos.appendChild(card);

    let colors = ['--shoes-blue', '--shoes-green', '--shoes-black'];
    changeColorProduct(index, colors[Math.floor(Math.random() * colors.length)]);
  });


}

/**
 * Cambia el color del producto
 *
 * @param {*} index indice del producto
 * @param {*} color_var color de la variable css
 */
function changeColorProduct(index, color_var) {
  let product = products[index];
  let card = document.getElementById(`card-${product.id}`);

  let imgs = {
    black: "./assets/img/shoes-black.png",
    blue: "./assets/img/shoes-blue.png",
    green: "./assets/img/shoes-green.png"
  }
  let key_color = color_var.split('-').slice(-1)[0];

  //cambia la imagen
  product.image = imgs[key_color];
  //seleccionamos la etiqueta imagen de la carta
  card.querySelector('img').src = product.image;

  //extraemos el color de la variable css y la asignamos 
  let color = getComputedStyle(card).getPropertyValue(color_var);
  card.style.setProperty('--circle-card-product', color);


}

/**
 * Agrega un producto al carrito
 *
 * @param {*} index_product indice del producto
 * @return {*} 
 */
function addToCart(index_product) {

  let product = products[index_product];

  product.amount += 1;
  product.stock -= 1;

  document.getElementById(`amount-${product.id}`).textContent = `cantidad ${product.amount}`;

  if (!shopping_card.some(item => item.id == product.id)) shopping_card.push(product);
  document.getElementById('count_cart').textContent = shopping_card.length;

}

/**
 *Carga los productos del carrito - modal 
 *
 */
function loadingProductsShoppingCard() {
  const card_products = document.querySelectorAll('.card-product-cards');

  //remueve los elementos del carrito
  card_products.forEach(card => card.remove());

  shopping_card.forEach((product, index) => {

    var card = document.createElement("div");
    card.classList.add("flex", "justify-between", "items-center", "card-product-cards");
    card.innerHTML = `
         
                  <img class="w-20" src="${product.image}" alt="">
                  <div class="flex flex-col gap-1">
                    <p class=" text-base txt-black">${product.name}</p>
                    <p class="font-semibold text-base txt-black">${product.price}$</p>

                    <div class="flex  justify-between gap-3">
                      <button type="button" class="btn-general">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                      <p class="font-semibold text-lg txt-black">${product.amount}</p>
                      <button type="button" class="btn-general">
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <button type="button" class=" self-start">
                    <i class="fa-solid fa-x text-sm "></i>
                  </button>
              `;

    document.getElementById('modal-content-products').appendChild(card);
  });
}

function toggleModal() {
  const modal = document.getElementById('modal');
  modal.classList.toggle('hidden');

  loadingProductsShoppingCard();
}

function toggleModalMenu() {
  const modal = document.getElementById('modal2');
  modal.classList.toggle('hidden');

}
loadingProducts();

/**
 * Oculta o muestra los botones de login, servicios y bot n de men  dependiendo del ancho de la pantalla.
 *
 * Si el ancho de la pantalla es <= 768px, se ocultan los botones y se muestra el bot n de men .
 * Si el ancho de la pantalla es > 768px y <= 1050px, se oculta el c rculo de zapatos.
 * Si el ancho de la pantalla es > 1050px, se muestran los botones y se oculta el bot n de men .
 */
function toggleMenuOnResize() {


  if (window.innerWidth <= 768) {

    document.getElementById('botones-login').classList.add('hidden');
    document.getElementById('servicios-menu').classList.add('hidden');
    document.getElementById('boton-menu').classList.remove('hidden');
    document.getElementById('circle-shoes-home').style.display = 'none';


  } else if (window.innerWidth <= 1050) {

    document.getElementById('circle-shoes-home').style.display = 'none';
  } else {

    document.getElementById('botones-login').classList.remove('hidden');
    document.getElementById('servicios-menu').classList.remove('hidden');
    document.getElementById('boton-menu').classList.add('hidden');
    document.getElementById('circle-shoes-home').style.display = '';
  }
}

/**
 *devuelve una promesa que se resuelve después de ms milisegundos.
 *
 * @param {*} ms
 * @return {*} 
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 *
 *permite usar await para que cada iteración espere la promesa. 
 *Cada imagen se muestra durante 3 segundos antes de pasar a la siguiente.
 *
 */

async function animationShoesHome() {
  const shoes = [
    "./assets/img/zapato.png",
    "./assets/img/zapato-azul.png",
    "./assets/img/zapato-verde.png",
    "./assets/img/zapato-gris.png"
  ];

  const shoes_home = document.getElementById('shoes-home');

  while (true) {             // bucle infinito
    for (const shoe of shoes) {
      shoes_home.src = shoe;

      // reiniciar animación
      shoes_home.style.animation = 'none';
      shoes_home.offsetHeight; // fuerza reflow
      shoes_home.style.animation = 'rotateMove 2s ease-in-out forwards';
      await sleep(4000);
    }
  }
}

window.addEventListener("resize", toggleMenuOnResize);
window.addEventListener("load", () => {
  animationShoesHome()
  toggleMenuOnResize()
});
