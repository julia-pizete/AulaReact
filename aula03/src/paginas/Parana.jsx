import { Link } from "react-router-dom";

export default function Parana() {
    return(
        <div>
            <h1>Estado do Parana</h1>
            <div className="conteudo">
              
              <img src="/PR.png"/>

              <p>O Paraná é um estado da região Sul do Brasil, cuja capital é Curitiba. 
                Destaca-se pela agricultura, indústria e comércio. Entre suas principais atrações estão 
                as Cataratas do Iguaçu. O estado também possui uma cultura diversificada, formada pela 
                influência de diferentes povos.
                 </p>
                 <p><Link to="/">Voltar</Link></p>

        </div>
        </div>
         
        
    );
}
