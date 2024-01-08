import styles from "./HeroSelect.module.css";

export const HeroSelect = () => {
    return (
        <div className={`container-fluid ${styles.heroSelect}`}>
            <div className="row">
                <div className={`col-md-6 col-sm-12 ${styles.selectContainer}`}>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">¿Cuál es su industria?</label>
                        <select class="form-select" id="inputGroupSelect01">
                            <option value="1">Alimentos y bebidas</option>
                            <option value="2">Textil y calzado</option>
                            <option value="3">Manufactura</option>
                            <option value="4">Retail y Tiendas departamentales</option>
                            <option value="5">Automotriz</option>
                            <option value="6">Otras Industrias</option>
                        </select>
                    </div>
                </div>
                <div className={`col-md-6`}></div>
            </div>
        </div>
    );
};
