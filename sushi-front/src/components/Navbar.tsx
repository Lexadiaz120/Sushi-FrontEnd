const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <img src="logo.jpg" alt="header-logo"></img>
        <ul className="menu">
          <li className="menu-link">Home</li>
          <li className="menu-link">Carta</li>
          <li className="menu-link">Sobre nosotros</li>
          <li className="menu-link">Entrega y Pagos</li>
          <li className="menu-link">Contactos</li>
        </ul>
        <div className="menu-icons">
          <img src="instagram_icon.jpg"></img>
          <img src="whatsapp_icon.png"></img>
          <img src="Vector.jpg"></img>
        </div>
        <div className="contacts-us">
          <img className="phone.png" alt="phone"></img>
          <span className="phone-number"></span>
          <span>+ 34 641 518 390</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
