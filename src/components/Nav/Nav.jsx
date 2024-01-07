import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <nav className={`${styles.nav} navbar navbar-expand-lg navbar-light`}>
              <div className="container">
                <a className={`navbar-brand ${styles.brand}`} href="#">Solares</a>
                <button className={`${styles.navbarToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a className={`${styles.navLink} nav-link`} aria-current="page" href="#">Soluciones</a>
                    </li>
                    <li className="nav-item">
                      <a className={`${styles.navLink} nav-link`} href="#">Industrias</a>
                    </li>
                    <li className="nav-item">
                      <a className={`${styles.navLink} nav-link`} href="#">Nosotros</a>
                    </li>
                    <li className="nav-item">
                      <a className={`${styles.navLink} nav-link`} href="#">Recursos</a>
                    </li>
                    <button type="button" class={`btn btn-primary ${styles.btnGuide}`}>
                        Guía solar 2024
                      </button>
                    {/* <li className="nav-item">
                      <a className={`${styles.navLink} nav-link disabled`} href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-2"></div>
        </div>

      </div>
    </>
  )
}