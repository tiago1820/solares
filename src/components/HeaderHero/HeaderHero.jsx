import styles from "./HeaderHero.module.css";

export const HeaderHero = () => {
  return (
    <div className={`container ${styles.headerHero}`}>
      <div className="row">
        <div className={`col-md-6 col-sm-12 ${styles.heroCaption}`}>
          Instalación de paneles solares para industrias y sistemas de almacenamiento de energía
        </div>
        <div className="col-md-6"></div>
      </div>

    </div>
  )
}

