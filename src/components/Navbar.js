import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Project Two
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="login.html">
              Login
            </a>
            <a class="nav-item nav-link" href="AcctPg.html">
              User
            </a>
            <a class="nav-item nav-link" href="signup.html">
              New
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
