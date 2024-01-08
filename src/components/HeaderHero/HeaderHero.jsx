import styles from "./HeaderHero.module.css";

export const HeaderHero = () => {
  return (
    <div className={`container-fluid ${styles.headerHero}`}>
      <div className="row">
        <div class="col-md-6">
          <div class="h-100 p-5 bg-body-tertiary border rounded-3">
            <p>Instalación de paneles solares para industrias y sistemas de almacenamiento de energía</p>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  )
}

