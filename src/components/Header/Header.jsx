import styles from "./Header.module.css";
import { Nav } from "../Nav/Nav";
import { HeaderHero } from "../HeaderHero/HeaderHero";
import { HeroDefault } from "../HeroDefault/HeroDefault";
import { HeroSelect } from "../HeroSelect/HeroSelect";

export const Header = () => {
    return (
        <div className={`${styles.headerContainer} header-container`}>
            <div className={styles.header}></div>
            <Nav />
            <HeaderHero />
            <HeroSelect />
            <HeroDefault />
        </div>

    )
}