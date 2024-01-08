import styles from "./HeroDefault.module.css";

export const HeroDefault = () => {
    return (
        <div className="container">
            <div className="col-md-12 my-5">
                <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                    <h2>Calcule cuánto puede ahorrar con una solución Solares
                    </h2>
                    <p>Conozca las opciones que existen para alcanzar sus objetivos de ahorro y sustentabilidad y sus beneficios.
                    </p>
                    <button className={`btn ${styles.btnCalc}`} type="button">Calcular ahorro</button>
                </div>
            </div>
        </div>
    );
};
