let menu = document.querySelectorAll('.nav_menu'),
    burger = document.querySelector('.ham_menu'),
    body = document.querySelector('body');

burger.addEventListener('click', AddActive);

function AddActive () {
    burger.classList.toggle('active');
    menu.forEach(elem => {elem.classList.toggle('active');})
    body.classList.toggle('active');
}

let navLink = document.querySelectorAll('.nav_item');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu () {
    burger.classList.remove('active');
    menu.forEach(elem => {elem.classList.remove('active');})
    body.classList.toggle('active');

}


const swiper = new Swiper('.swiper-banner', {
    navigation: {
      nextEl: '.swiper-button-next-banner',
      prevEl: '.swiper-button-prev-banner',
    },
    pagination: {
      el: '.swiper-pagination-banner',
      clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },  
    autoplay: {
    delay: 10000,
    },
});

const swiper_gallery = new Swiper('.swiper-gallery', {
    navigation: {
      nextEl: '.swiper-button-next-gallery',
      prevEl: '.swiper-button-prev-gallery',
    },
    pagination: {
      el: '.swiper-pagination-gallery',
      clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  })
const animItems = document.querySelectorAll('._anim_items');

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for(let i=0; i < animItems.length; i++){
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            } else {
                if(!animItem.classList.contains('_anim_no_hide')){
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
         const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;

         return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
    }

    setTimeout(() => {
        animOnScroll()
    }, 1000);
}
const countres = document.querySelectorAll('.countre'),
         speed = 2000;

countres.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-tager')
        const count =  +counter.innerText;

        const inc = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 80)
        } else {
            counter.innerText = target;
        }
    }

    let block = document.querySelector('.counter_cont')
    function check () {
    if(block.classList.contains('_active') == true)
        updateCount()
    }

        setInterval (check, 1000)
})
    



