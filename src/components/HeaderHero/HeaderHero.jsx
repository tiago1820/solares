import styles from "./HeaderHero.module.css";

export const HeaderHero = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className={`h-100 my-5 ${styles.textContainer}`}>
            <h2>Instalación de paneles solares para industrias y sistemas de almacenamiento de energía</h2>
          </div>
        </div>

        <div className="col-md-6"></div>
      </div>
    </div>
  )
}

