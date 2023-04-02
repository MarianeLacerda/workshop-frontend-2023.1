import {Link} from "react-router-dom"
import styles from "./Inicio.module.css"
import img from "../../assets/img.png"
import Navbar from "../../components/Navbar"
import Main from "../../components/Main/Main"

export function Inicio(){
    return(
<>
<Navbar/>
<Main/>

</>
    )
}


export default Inicio