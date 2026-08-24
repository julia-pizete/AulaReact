import { Link } from "react-router-dom";
export default function Pernambuco () {
    return (
        <div>
            <h1>Estado do Pernambuco </h1>
            <div className="conteudo">


                <img src="/PE.png" />

                <p> Pernambuco é um estado localizado na região Nordeste do Brasil. Sua capital é Recife, uma cidade conhecida por suas belas praias, 
                    rios e rica cultura. O estado possui importantes manifestações culturais, como o frevo, o maracatu e as festas de São João.
                     Pernambuco também se destaca pela produção de cana-de-açúcar e pelo turismo, principalmente por suas praias e paisagens naturais.
                     É um estado com grande importância histórica e cultural para o Brasil.
                   
    
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}