import { Link } from "react-router-dom";
export default function Sergipe () {
    return (
        <div>
            <h1>Estado do Sergipe </h1>
            <div className="conteudo">


                <img src="Se/.png" />

                <p>
                Sergipe é um estado localizado na Região Nordeste do Brasil. Sua capital é Aracaju. 
                É o menor estado brasileiro em extensão territorial, mas possui belas praias, rios e paisagens naturais. 
                Sua economia se destaca pela agricultura, pecuária, indústria e turismo. 
                Sergipe também tem uma cultura rica, com festas, comidas típicas e tradições nordestinas.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}