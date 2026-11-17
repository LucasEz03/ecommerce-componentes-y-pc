import CartWidget from "./CartWidget";

const categorias = ["Monitores", "Placas Madre", "Procesadores", "Memorias RAM"];

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">TechStore</h2>

      <div className="navbar-right">
        <ul className="navbar-categorias">
          {categorias.map((cat) => (
            <li key={cat}>
              <a href="#">{cat}</a>
            </li>
          ))}
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;