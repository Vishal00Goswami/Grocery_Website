let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingBox.classList.remove('active');
    loginBox.classList.remove('active');
    menuBox.classList.remove('active');
}

let shoppingBox = document.querySelector('.shopping-cart')

document.querySelector('#cart-btn').onclick = () => {
    shoppingBox.classList.toggle('active');
    searchForm.classList.remove('active');
    loginBox.classList.remove('active');
    menuBox.classList.remove('active');
}

let loginBox = document.querySelector('.login-form')

document.querySelector('#user-btn').onclick =()=>{
    loginBox.classList.toggle('active');
    shoppingBox.classList.remove('active');
    searchForm.classList.remove('active');
    menuBox.classList.remove('active');
}

let menuBox = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = ()=>{
    menuBox.classList.toggle('active');
    loginBox.classList.remove('active');
    shoppingBox.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = ()=>{
    searchForm.classList.remove('active');
    shoppingBox.classList.remove('active');
    loginBox.classList.remove('active');
    menuBox.classList.remove('active');
}







var swiper = new Swiper(".product-slider", {
    loop:true,
    // slidesPerView: 1,
    spaceBetween: 20,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    autplay:{
        delay:7500,
        disableOnInteraction:false
    }, 
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      1020: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });


  var swiper = new Swiper(".review-slider", {
    loop:true,
    // slidesPerView: 1,
    spaceBetween: 20,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    autplay:{
        delay:7500,
        disableOnInteraction:false
    }, 
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      1020: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });