import {Link} from "react-router-dom"
import styles from "../../pages/Inicio/Inicio.module.css"
import img from "../../assets/img.png"

export function Navbar(){
    return(

        <header className={styles.header}>
       <img className={styles.logo} src={img} alt="logo"/>
        <nav className="menu">
        <ul className={styles.ullista}>
           <li><Link to="/inicio">Inicio</Link></li>
             <li><Link to="/galeria">Galeria</Link></li>
             <li><Link to="/episodios">Episodios</Link></li>
        </ul>
        </nav>
        </header>
    )
}


export default Navbar