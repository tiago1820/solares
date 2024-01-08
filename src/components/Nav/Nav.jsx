import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className={`navbar-brand fw-bold ${styles.brand}`} href="#">Solares</a>
            <button className={`navbar-toggler ${styles.navbarToggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className={`nav-link dropdown-toggle ${styles.navLink}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Soluciones
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Paneles Solares</a></li>
                    <li><a className="dropdown-item" href="#">Sistemas de Almacenamiento</a></li>
                    <li><a className="dropdown-item" href="#">Operación y Mantenimiento</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className={`nav-link dropdown-toggle ${styles.navLink}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Industrias
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Alimentos y Bebidas</a></li>
                    <li><a className="dropdown-item" href="#">Textil y Calzado</a></li>
                    <li><a className="dropdown-item" href="#">Manufactura</a></li>
                    <li><a className="dropdown-item" href="#">Automotriz</a></li>
                    <li><a className="dropdown-item" href="#">Retail y Tiendas departamentales</a></li>
                    <li><a className="dropdown-item" href="#">Otras Industrias</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${styles.navLink}`} href="#">Nosotros</a>
                </li>
                <li className="nav-item dropdown">
                  <a className={`nav-link dropdown-toggle ${styles.navLink}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Recursos
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Blog</a></li>
                    <li><a className="dropdown-item" href="#">Webnars</a></li>
                    <li><a className="dropdown-item" href="#">Calculadora</a></li>
                  </ul>
                </li>
              </ul>
              <button className={`btn btn-outline-success ${styles.btnGuide}`} type="submit">GUÍA SOLAR 2024</button>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}