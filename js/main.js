
let barsBtn = document.querySelector("nav i.fa-bars"),
    navLinks = document.querySelector("nav .nav-links"),
    dropDown = document.querySelectorAll(".product-box .drop-down"),
    boxPrice = document.querySelectorAll(".product-box .box-price"),
    featureContent = document.querySelectorAll(".feature-content");


/* events  */ 
barsBtn.addEventListener("click", toogleMenu);
dropDown.forEach((el, index) => el.addEventListener("click", () => togglePrice(index)));



/*  functions  */ 

/*  toogle monile menu */
function toogleMenu() {
    navLinks.classList.toggle('show-menu');
}

/* product toggle price menu */ 

// dropDown.forEach((el, index) => {
//     el.addEventListener("click",  function() {
//         boxPrice[index].classList.toggle("toggle-price");
//         if(boxPrice[index].classList.contains("toggle-price")){
//             dropDown[index].children[1].textContent = "-";
//         } else{
//             dropDown[index].children[1].textContent = "+";
//         }
//     })
// })

// or

function togglePrice(index){
    boxPrice[index].classList.toggle("toggle-price");
        if(boxPrice[index].classList.contains("toggle-price")){
            dropDown[index].children[1].textContent = "-";
        } else{
            dropDown[index].children[1].textContent = "+";
        }
    }

/* feature slide image */ 

featureContent.forEach((box, index, arr) => {
   let boxs = [arr[index]];
   boxs.forEach(el => {
    el.addEventListener("mouseenter", function() {
      let spanColors = [...this.children[1].children[2].children];
      boxImg = box.children[0]
      spanColors.forEach(s => {
        s.addEventListener("click", function() {
          spanColors.forEach(sp => sp.classList.remove("active"))
          this.classList.add("active");
          let imgTarget = this.dataset.img;
          boxImg.src = imgTarget
        })
      })
    })
   })
})


/* home banner slider */ 

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });


/* features slider */ 

var swiper = new Swiper(".myFeatures", {
  slidesPerView: 2,
  spaceBetween: 15,
  slidesPerGroup: 1,
  loop: true,
  autoplay: true,
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 15,
    },

    992: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
});

// aos animation library

// AOS.init();