import { Link } from "react-router-dom";
export default function Acre() {
    return(
        <div>
            <h1>Estado do Acre</h1>
            <div className="conteudo">
              
              <img src="/AC.png"/>

              <p>O Acre é um estado localizado na Região Norte do Brasil. 
                Sua capital é Rio Branco. O estado é conhecido pela grande presença da Floresta Amazônica
                 e pela diversidade de sua fauna e flora. Sua economia se destaca pela agricultura,
                  pecuária e extrativismo.

                 </p>
                 <p><Link to="/">Voltar</Link></p>

        </div>
        </div>
         
        
    );
}