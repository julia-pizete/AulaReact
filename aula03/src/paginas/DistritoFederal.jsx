import { Link } from "react-router-dom";
export default function DistritoFederal() {
    return (
        <div>
            <h1>Estado do Distrito Federal</h1>
            <div className="conteudo">

                <img src="/DF.png" />

                <p>
                O Distrito Federal fica na Região Centro-Oeste do Brasil e tem como capital Brasília, que também é a capital do país.
                 É onde estão os principais órgãos do governo brasileiro. 
                O Distrito Federal é conhecido por sua arquitetura moderna e pelos monumentos de Brasília.
                </p>
              

                <p>
                <Link to="/">Voltar</Link>
                </p>

            </div>


        </div>

    );


}