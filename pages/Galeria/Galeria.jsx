import { useEffect, useState } from "react"
import api from "../../api"

export function Galeria(){

    const [galeria, setGaleria] = useState([]);

    useEffect(() => {
        api
          .get("character")
          .then((response) => {
            setGaleria(response.data.results)
        })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, [galeria]);
    
    return(
        
        <>
        <div className="titulo">
        <h1>Galeria</h1>
        </div>
        <ul>
            {
                galeria.length<1?<span>Carregando...</span>:
                galeria.map((obj)=>{
                                    return(
                                        <li className="lista" key={obj.id}>
                                            <div className="listadecarac">
                                        <div className="Caracteristicas">
                                            <img src={obj.image} alt="imagem do personagem"/>
                                            <p>{obj.name}</p>
                                            <span>{obj.gender ==="Male"?"Gênero: Masculino":"Gênero: Feminino"}</span>
                                            <p>{obj.species ==="Human"?"Tipo: Humano":"Tipo: Alienígina"}</p>
                                            <p>{obj.status ==="Alive"?"Status: Vivo":"Status: Morto"}</p>
                                            </div>
                                            </div>
                                        </li>
                                        
                                        
                                    )
                })
            }
        </ul>
        </>
        
    )
}

export default Galeria