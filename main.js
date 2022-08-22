// const navBtnContainer = document.querySelector(".nav-btn-container");
// const searchBtn = document.querySelector(".search-btn");
// const cartBtn = document.querySelector("cart-btn");

// searchBtn.addEventListener("click", () => {
//     searchBox.classList.add("active");
//     navBtnContainer.classList.add("active");
// });

// cartBtn.addEventListener("click", () => {
//     searchBox.classList.remove("active");
//     navBtnContainer.classList.remove("active");
// });


const productContainers = document.querySelectorAll('.product-container');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');
const videoPlayer = document.querySelector('.video-player');
const video = videoPlayer.querySelector('.video');
const playBtn = videoPlayer.querySelector('.play-button');

const openModalBtn = document.querySelectorAll('[data-modal-target]');
const closeModalBtns = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const submitBtn = document.querySelector('.submit-')
const cancelBtn = document.querySelector('.cancel')

// Popular items section
productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// Play and pause button
playBtn.addEventListener('click', (e) => {
    if (video.paused) {
        video.play()
        e.target.textContent = 'otherimages/Arrow.png'
    } else {
        video.pause()
        e.target.textContent = 'otherimages/Arrow.png'
    }
})

// Request a dish modal
openModalBtn.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        console.log(button.dataset.modalTarget);
        openModal(modal)

    })
})
// cart modal
// openModalBtn.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal1 = document.querySelector(button.dataset.modalTarget)
//         console.log(button.dataset.modalTarget)
//         openModal(modal1)
//         function noscroll(){
//             window.scrollTo(0,0);
//         }
//         window.addEventListener("scroll", noscroll)
//     })
// })

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.cart-modal-container.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalBtns.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

// cancelBtn.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = button.closest('.cancel')
//         closeModal(modal)
//     })
// })


closeModalBtns.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.cart-modal-container')
        closeModal(modal)

    })

})


function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
    // (window).scroll(function() { return false; });
    // querySelectorAll(".body")(window).scroll(function(){return false;})
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    function noscroll() {
        window.scrollTo(0, scrollTop);
    }
    window.addEventListener("scroll", noscroll)

// var nameInput = document.querySelector(".name-input").value;
// console.log(nameInput);

// var range = document.querySelector(".range-1").value;
// console.log(range);

// var range1 = document.querySelector(".range-2").value;
// console.log(range1);

// var preparation = document.querySelector(".preparation-1").value;
// console.log(preparation);

// var preparation1 = document.querySelector(".preparation-2").value;
// console.log(preparation1);

// var recipe = document.querySelector(".recipe").value;
// console.log(recipe);

// var image = document.querySelector(".image-upload-input").value;
// console.log();
}

var arr = []
submitBtn.addEventListener('click', function(){

    var nameInput = document.querySelector(".name-input").value;
    console.log(nameInput);

    var range = document.querySelector(".range-1").value;
    console.log(range);

    var range1 = document.querySelector(".range-2").value;
    console.log(range1);

    var preparation = document.querySelector(".preparation-1").value;
    console.log(preparation);

    var preparation1 = document.querySelector(".preparation-2").value;
    console.log(preparation1);

    var recipe = document.querySelector(".recipe").value;
    console.log(recipe);

    if(nameInput && range && range1 && preparation && preparation1 && recipe){
        var obj = {nameInput, range, range1, preparation, preparation1, recipe}
        arr.push(obj)
        console.log(arr)
    }
    else{
        alert("Cannot submit the form as one of the field(s) are missing!")
    }
})
// for(let i=0; i<arr.length; i++)

// cancelBtn.addEventListener('click', function(){
//     console.log("cancel Button!")
// })






function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    // window.addEventListener("scroll", ()=>{
    //     var scrollTopp = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    //     window.scrollTo(0,scrollTopp);
    // })
    delete window.scrollTo;
}

// Request a dish carousel
productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})