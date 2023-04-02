import{useEffect, useState} from "react"
import api from "../../api"

export function Episodios(){

    const [episodios, setEpisodios] = useState([]);

    useEffect(() => {
        api
          .get("episode")
          .then((response) => {
            setEpisodios(response.data.results)
        })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, [episodios]);
    
    return(
        <>
        <h1>Episodios</h1>


        
        <ul>
            {
                episodios.length<1?<span>Carregando...</span>:
                episodios.map((obj)=>{
                                    return(
                                        <li className="listaEpisodios" key={obj.episode}>
                                            <div className="listaepiso">
                                            <div className="Episodios">
                                            <p>{obj.episode}</p>
                                            <a href={obj.url}>{obj.url}</a>
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

export default Episodios
