import planetLogo from "../assets/planet-logo.png";

function Navbar() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-container">
          <img
            src={planetLogo}
            alt="Planet Logo"
            className="nav-logo"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/fallback-logo.png";
            }}
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;