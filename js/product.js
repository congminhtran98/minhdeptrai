const productImages = document.querySelectorAll(".product-images img");//chọn ảnh
const productImageSlide = document.querySelector(".img-slider");

let activeImageSlide = 0;

productImages.forEach((item, i) => {//looping through each image thumb
    item.addEventListener('click', () =>{//adding click event to each image
        productImages[activeImageSlide].classList.remove('active');//remove active
        item.classList.add('active');//adding active class to the current or clicked
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;//updating the image slider variable to track current
    })
})

//toggle size buttons 
const sizeBtns = document.querySelectorAll('.size-radio-btn');//selecting size button
let checkedBtn = 0; // current selected button
let size;

sizeBtns.forEach((item, i) => {//looping through each button
    item.addEventListener('click' , () => {//adding click event to each
        sizeBtns[checkedBtn].classList.remove('check');//removing check class from
        item.classList.add('check');//adding check class to clicked button
        checkedBtn =i;//updating the variable
        size = item.innerHTML;
    })
})

//hàm thay đổi title của trình duyệt 
const setData = (data) => {
    let title = document.querySelector('title');
    

    //setup the images
    productImages.forEach((img, i) => {
        if(data.images[i]){
            img.src = data.images[i];
        } else{
            img.style.display = 'none';
        }
    })
    productImages[0].click(); 

    // setup size buttons
    sizeBtns.forEach(item => {
        if(!data.sizes.includes(item.innerHTML)){
            item.style.display = 'none';
        }
    })

    //setting up texts
    const name = document.querySelector('.product-brand');
    const shortDes = document.querySelector('.product-short-des')
    const des = document.querySelector('.des');
    
    title.innerHTML += name.innerHTML  = data.name;
    shortDes.innerHTML = data.shortDes;
    des.innerHTML = data.des;

    //pricing
    const sellPrice = document.querySelector('.product-price');
    const actualPrice = document.querySelector('.product-actual-price');
    const discount = document.querySelector('.product-discount');

    sellPrice.innerHTML = `$${data.sellPrice}`;
    actualPrice.innerHTML = `$${data.actualPrice}`;
    discount.innerHTML = `(${data.discount}% off)`;

    //wishlist and card btn
    const wishlistBtn = document.querySelector('.wishlist-btn');
    wishlistBtn.addEventListener('click', () => {
        wishlistBtn.innerHTML = add_product_to_cart_or_wishlist('wishlist', data);
    })

    //wishlist and card btn
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.addEventListener('click', () => {
        cartBtn.innerHTML = add_product_to_cart_or_wishlist('cart', data);
    })
}

//fetch data 
const fetchProductData = () => {
    fetch('/get-products', {
        method: 'post',
        headers : new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({id: productId})
    })
    .then(res => res.json())
    .then(data => {
        setData(data);
        getProducts(data.tags[0]).then(data => createProductSlider(data, '.container-for-card-slider' , 'similar products'))
        
    })
    
    
}

let productId = null;
if(location.pathname != '/products'){
    productId = decodeURI(location.pathname.split('/').pop());
    fetchProductData();
}