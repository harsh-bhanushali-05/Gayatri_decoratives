import "./FooterStyles.css";
function Footer(){
return <footer class="footer-distributed container">

    <div class="footer-right">
        <p style={{ color:"white" }}>Made by:</p>
        <a href="https://www.instagram.com/harsh_bhanushali05/"><i class="fa fa-facebook"></i></a>
        
        <a href="https://www.linkedin.com/in/harsh-bhanushali-706044225/"><i class="fa fa-linkedin"></i></a>
        <a href="https://github.com/"><i class="fa fa-github"></i></a>

    </div>

    <div class="footer-left">

        <p class="footer-links">
            <a class="link-1" href="/">Home</a>

            <a href="/">Category</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
        </p>

        <p>Gayatri Decoratives &copy; 2023</p>
    </div>

</footer>
}
export default Footer;