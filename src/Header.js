import "bootstrap/dist/css/bootstrap.min.css"

function Header() {
    return (
        <div class="container justify-content-center text-center">
            <header className="flex-wrap justify-content-center py-3 mb-4 border-bottom text-center">
                <a href="/" className="text-center d-flex justify-content-center align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span className="fs-4 text-center justify-content-center align-items-center">Choose Your Pokemon!</span>
                </a>
            </header>
        </div>
    )
}

export default Header;
