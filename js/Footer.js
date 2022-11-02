const createFooter =() =>{
    let footer = document.querySelector('footer');
    footer.innerHTML =`
    <div class="footer-content">
            <img src="../img/light-logo.png" alt="" class="logo">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="http://localhost:3001/search/Men" class="footer-link" id="">t-Shirt</a></li>
                    <li><a href="#" class="footer-link" id="">sweatshirts</a></li>
                    <li><a href="#" class="footer-link" id="">Shirts</a></li>
                    <li><a href="#" class="footer-link" id="">Jeans</a></li>
                    <li><a href="#" class="footer-link" id="">Trousers</a></li>
                    <li><a href="#" class="footer-link" id="">Shoes</a></li>
                    <li><a href="#" class="footer-link" id="">Casuals</a></li>
                    <li><a href="#" class="footer-link" id="">Formals</a></li>
                    <li><a href="#" class="footer-link" id="">Sports</a></li>
                    <li><a href="#" class="footer-link" id="">Watch</a></li>
                    
                </ul>
                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-link" id="">t-Shirt</a></li>
                    <li><a href="#" class="footer-link" id="">sweatshirts</a></li>
                    <li><a href="#" class="footer-link" id="">Shirts</a></li>
                    <li><a href="#" class="footer-link" id="">Jeans</a></li>
                    <li><a href="#" class="footer-link" id="">Trousers</a></li>
                    <li><a href="#" class="footer-link" id="">Shoes</a></li>
                    <li><a href="#" class="footer-link" id="">Casuals</a></li>
                    <li><a href="#" class="footer-link" id="">Formals</a></li>
                    <li><a href="#" class="footer-link" id="">Sports</a></li>
                    <li><a href="#" class="footer-link" id="">Watch</a></li>
                    
                </ul>
            </div>
            
        </div>
        <p class="footer-title">about company</p>
        <p class="info">Basic Information of my company</p>
        <p class="info">suppost emails - help@Clothing.com,
            customersuppost@clothing.com
        </p>
        <p class="info">telephone:</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & services</a>
                <a href="#" class="social-link">privacy page</a>
            </div>
            <div>
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Twitter</a>
            </div>
        </div>

        <p class="footer-credit">Cloting,Best apparels online store</p>

    
    `;
}

createFooter();