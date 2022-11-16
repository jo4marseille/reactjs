export default function Navbar() {

    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">
                <img src="img/logo-find-noir.png" alt="logo" height={51}/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">


                        <li class="cod4">
                        {/* <img src="img/code4marseille.png" alt="logo" height={60}/> */}
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="line"></div>
        </div>

    )
}