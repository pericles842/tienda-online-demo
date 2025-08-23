
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


// ScrollReveal().reveal('#shoes-home',
//   {
//     distance: '100%',
//     origin: 'top',
//     duration: global_duration,
//     delay: 100,
//     rotate: {
//       x: 0,
//       y: 0,
//       z: 100,
//     },


//   });

