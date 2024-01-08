import styles from "./HeroDefault.module.css";

export const HeroDefault = () => {
    return (
        <div className="container-fluid">
            <div className={`container ${styles.container} `}>
                <div class="col-md-12 my-5">
                    <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                        <h2>Calcule cuánto puede ahorrar con una solución Solares
                        </h2>
                        <p>Conozca las opciones que existen para alcanzar sus objetivos de ahorro y sustentabilidad y sus beneficios.
                        </p>
                        <button class="btn btn-outline-secondary" type="button">Calcular ahorro</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
