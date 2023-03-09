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
]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
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
    })
}

renderProducts(products)
renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))