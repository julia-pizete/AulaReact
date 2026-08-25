import { Link } from "react-router-dom";
export default function Goias() {
    return (
        <div>
            <h1>Estado do Goias </h1>
            <div className="conteudo">


                <img src="/GO.png" />

                <p>
                
                Goiás é um estado da Região Centro-Oeste do Brasil. Sua capital é Goiânia. O estado é conhecido por suas belezas naturais,
                 agricultura, culinária típica e festas tradicionais.
                 Goiás também possui cidades históricas, como Pirenópolis e Goiás Velho.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}