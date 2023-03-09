let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider controll

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

let products = [
    {
        name: 'XXXXX',
        image1: './images/do4.png',
        image2: './images/y2.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'XXXXX',
        image1: './images/151515.jpg',
        image2: './images/dog2.3.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'XXXXXX',
        image1: './images/5555.png',
        image2: './images/7777.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'XXXXXX',
        image1: './images/8888.png',
        image2: './images/66666.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'XXXXXX',
        image1: './images/99999.jpg',
        image2: './images/101010.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'XXXXXX',
        image1: './images/111111.jpg',
        image2: './images/121212.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'XXXXXX',
        image1: './images/131313.jpg',
        image2: './images/141414.jpg',
        old_price: '400',
        curr_price: '300'
    },
]

let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})


