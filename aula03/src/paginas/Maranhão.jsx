import { Link } from "react-router-dom";
export default function Maranhão () {
    return (
        <div>
            <h1>Estado do Maranhão </h1>
            <div className="conteudo">


                <img src="MA/.png" />

                <p>
                O Maranhão é um estado localizado na Região Nordeste do Brasil. Sua capital é São Luís, uma cidade conhecida por seu 
                centro histórico e sua cultura. O estado possui belas paisagens naturais, como os Lençóis Maranhenses, com suas dunas e lagoas.
                 Sua economia se destaca pela agricultura, pecuária, indústria e turismo.
                 O Maranhão também tem festas e tradições culturais muito importantes.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}