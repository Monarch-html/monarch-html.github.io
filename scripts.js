/* функции для header */

var current_category = 'Кольца'

let logo_header = document.querySelector('.logo-header')
logo_header.addEventListener('click', function(){
    if(document.location == 'http://127.0.0.1:5500/index.html'){
        document.location.reload()
    }else{
        document.location.assign('index.html')
    }
})

let logo_footer = document.querySelector('.logo-footer')
logo_footer.addEventListener('click', function(){
    if(document.location == 'http://127.0.0.1:5500/index.html'){
         document.location.reload()
    }else{
        document.location.assign('index.html')
    }
})

let top_line_items = document.querySelectorAll('.top-line-item')
for( i=0; i<top_line_items.length; i+=1){
    let top_line_item = top_line_items[i]
    top_line_item.addEventListener('click', function(){
        alert('Эта кнопка в разработке')
    })
}

let cart_btn = document.querySelector('.cart-btn')
cart_btn.addEventListener('click', function(){
    document.location.assign('cart_page.html')
})
let menu_btn = document.querySelector('.menu-btn')
let menu_svg = menu_btn.querySelector('.menu-svg')
let first_menu = menu_btn.querySelector('.first-menu')
menu_svg.addEventListener('click', function(){
    if(first_menu.style.display == 'block'){
        first_menu.style.display = 'none'
    }else{
        first_menu.style.display = 'block'
    }
})

let footer_navigation_btn = document.querySelectorAll('.footer-navigation-btn')
for(i=0; i<footer_navigation_btn.length; i+=1){
    footer_navigation_btn[i].addEventListener('click', function(){
        document.location.assign('catalog_page.html')
        var current_category = footer_navigation_btn[i].innerHTML
    })
}



function main(){
    /* функции для first-block */
    
    let brends_list = document.querySelector('.brends-list')
    let a = brends_list.querySelectorAll('a')
    let brend_bg = [
        'bulgari_logo.jpg',
        'cartier_logo.jpg',
        'piaget_logo.jpg',
        'graff_logo.jpg',
        'mikimoto_logo.jpg',
        'buccellati_logo.jpg'
    ]
    let brend_href = [
        'https://www.bulgari.com/en-int/',
        'https://www.cartier.com/en-us/home',
        'https://www.piaget.com/',
        'https://www.graff.com/international-en/home/',
        'https://www.mikimoto.com/',
        'https://www.buccellati.com/en_row/'
    ]
    let brends = document.querySelectorAll('.brend-card')
    for(i=0; i<brends.length; i+=1){
        brends[i].style.background = `url(images/${brend_bg[i]}) no-repeat`
        brends[i].style.backgroundSize = `cover`
        brends[i].style.backgroundPosition = `center`
        a[i].href = brend_href[i]
    }
    
    let catalog_btn = document.querySelector('.catalog-btn')
    catalog_btn.addEventListener('click', function(){
        document.location.assign('catalog_page.html')
    })
    let category_list = document.querySelectorAll('.category')
    for(i=0; i<category_list.length; i+=1){
        category_list[i].addEventListener('click', function(){
            document.location.assign('catalog_page.html')
            current_category = category_list[i].innerHTML
        })
    }
}

class Product{
    constructor(name, price, img_url, category){
        this.name = name,
        this.price = price,
        this.img_url = img_url
        this.category = category
    }
    intoHTML(){
        return `<div class="product-name">${this.name}</div>
        <p class="product-price">${this.price}</p>`
    }
}

let products_list = [
    new Product('Кольцо Дракона', '2 500 000 сум', 'url(images/dragon-ring.jpg)', 'Кольца'),
    new Product('Кольцо Дракона', '2 500 000 сум', 'url(images/dragon-ring.jpg)', 'Кольца')
]

let cart_products = []
function catalog(){
    /* функции для catalog_page */

    let category_btn = document.querySelectorAll('.category-btn')
    for(i=0; i<category_btn.length; i+=1){
        let select_category = category_btn[i]
        if(select_category.querySelector('.category-name').innerHTML == current_category){
            select_category.classList.add('selected-category')
        }
        select_category.addEventListener('click', function(){
            for(i=0; i<category_btn.length; i+=1){
                let category = category_btn[i]
                if(category.classList.contains('selected-category') == false){
                    category.querySelector('.category-first').style.width = '110px'
                    category.querySelector('.category-first').style.height = '50px'
                }
                category.classList.remove('selected-category')
            }
            select_category.classList.add('selected-category')
            current_category = select_category.querySelector('.category-name').innerHTML
            get_poducts()
        })
        select_category.addEventListener('mouseover', function(){
            if(select_category.classList.contains('selected-category') == false){
                select_category.querySelector('.category-first').style.width = '120px'
                select_category.querySelector('.category-first').style.height = '60px'
            }
        })
        select_category.addEventListener('mouseout', function(){
            if(select_category.classList.contains('selected-category') == false){
                select_category.querySelector('.category-first').style.width = '110px'
                select_category.querySelector('.category-first').style.height = '50px'
            }
        })
    }

    function add_to_cart(){
        let add_to_cart_btn = document.querySelectorAll('.add-to-cart')
        for(i=0; i<add_to_cart_btn.length; i+=1){
            add_to_cart_btn[i].addEventListener('click', function(){
                let name = add_to_cart_btn[i].parentNode.querySelector('.product-name').innerHTML
                for(i=0; i<products_list.length; i+=1){
                    if(products_list[i].name == name){
                        cart_products.push(products_list[i])
                    }
                }
            })
        }
    }
    
    function get_poducts(){
        document.querySelector('.product-list').innerHTML = ''
        let current_products = []
        for(i=0; i<products_list.length; i+=1){
            if(products_list[i].category == current_category){
                current_products.push(products_list[i])
            }
        }
        for(i=0; i<current_products.length; i+=1){
            document.querySelector('.product-list').innerHTML += `<div class="product-card"><div class="add-to-cart"><p class="add-to-cart-text">добавить в корзину</p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path d="M15 5H12V4C12 2.93913 11.5786 1.92172 10.8284 1.17157C10.0783 0.421427 9.06087 0 8 0C6.93913 0 5.92172 0.421427 5.17157 1.17157C4.42143 1.92172 4 2.93913 4 4V5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V6C16 5.73478 15.8946 5.48043 15.7071 5.29289C15.5196 5.10536 15.2652 5 15 5ZM6 4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2C8.53043 2 9.03914 2.21071 9.41421 2.58579C9.78929 2.96086 10 3.46957 10 4V5H6V4ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V7H4V8C4 8.26522 4.10536 8.51957 4.29289 8.70711C4.48043 8.89464 4.73478 9 5 9C5.26522 9 5.51957 8.89464 5.70711 8.70711C5.89464 8.51957 6 8.26522 6 8V7H10V8C10 8.26522 10.1054 8.51957 10.2929 8.70711C10.4804 8.89464 10.7348 9 11 9C11.2652 9 11.5196 8.89464 11.7071 8.70711C11.8946 8.51957 12 8.26522 12 8V7H14V17Z" fill="white"/>
            </svg></div></div>`
            let product_list = document.querySelectorAll('.product-card')
            product_list[i].innerHTML += current_products[i].intoHTML()
            product_list[i].style.background = current_products[i].img_url
            product_list[i].style.backgroundSize = 'cover'
        }
    }
    get_poducts()
    add_to_cart()
}





function cart(){
    let cart_list = document.querySelector('.cart-products-list')
    for(i=0; i<cart_products.length; i+=1){
        cart_list.innerHTML += `<div class="cart-product-card">
        <div style="background: ${cart_products[i].img_url}" class="cart-product-img"></div>
        <div class="cart-product-text">
            <p class="cart-product-name p-24r">${cart_products[i].name}</p>
            <p class="cart-product-price p-14r">${cart_products[i].price}</p>
        </div>
        <div class="cart-count-block">
            <div class="cart-count-change">
                <div class="minus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"/>
                    </svg>
                </div>
                <div class="number p-36b-upper">1</div>
                <div class="plus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"/>
                    </svg>
                </div>
            </div>
            <div class="trash">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z"/>
                </svg>
            </div>
        </div>
    </div>`
    }
}


if(document.location == 'https://monarch-html.github.io/index.html'){
    main()
}else if(document.location == 'https://monarch-html.github.io/'){
    main()
}else if(document.location == 'http://127.0.0.1:5500/'){
    main()
}else if(document.location == 'http://127.0.0.1:5500/index.html'){
    main()
}else if(document.location == 'https://azyjewelry.000webhostapp.com/index.html'){
    main()
}else if(document.location == 'https://azyjewelry.000webhostapp.com/'){
    main()
}else if(document.location == 'https://monarch-html.github.io/catalog_page.html'){
    catalog()
}else if(document.location == 'http://127.0.0.1:5500/catalog_page.html'){
    catalog()
}else if(document.location == 'https://azyjewelry.000webhostapp.com/catalog_page.html'){
    catalog()
}else if(document.location == 'https://monarch-html.github.io/cart_page.html'){
    cart()
}else if(document.location == 'http://127.0.0.1:5500/cart_page.html'){
    cart()
}else if(document.location == 'https://azyjewelry.000webhostapp.com/cart_page.html'){
    cart()
}