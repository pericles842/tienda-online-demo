
const global_duration = 600
ScrollReveal({ reset: true });

const titleHomeIds = ['#nike-sumer', '#collections', '#description', '#btns-title']

titleHomeIds.forEach((title, i) => {
  ScrollReveal().reveal(title,
    {
      distance: '150%',
      origin: 'left',
      duration: global_duration,
      delay: i * 300 / 2,
      scale: i,
    });

})

products.forEach((product, i) => {
  ScrollReveal().reveal('#card-' + product.id,
    {
      distance: '20%',
      origin: 'top',
      duration: global_duration,
      delay: i * 300 / 2,
    });
})

ScrollReveal().reveal('#oferta-descuento',
  {
    distance: '20%',
    origin: 'bottom',
    duration: global_duration,
    delay: 0,
  });

ScrollReveal().reveal('#nike-sports',
  {
    distance: '20%',
    origin: 'left',
    duration: global_duration,
    delay: 400,
  });

ScrollReveal().reveal('#oferta-img',
  {
    distance: '20%',
    origin: 'right',
    duration: global_duration,
    delay: 400,
  });

ScrollReveal().reveal('#oferta-ventas',
  {
    distance: '20%',
    origin: 'bottom',
    duration: global_duration,
    delay: 400
  });

ScrollReveal().reveal('#oferta-sport',
  {
    distance: '20%',
    origin: 'bottom',
    duration: global_duration,
    delay: 400
  });
