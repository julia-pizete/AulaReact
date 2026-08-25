import { Link } from "react-router-dom";
export default function Piaui () {
    return (
        <div>
            <h1>Estado do Piaui</h1>
            <div className="conteudo">


                <img src="/PI.png" />

                <p>
                O Piauí é um estado do Nordeste do Brasil, com capital em Teresina.
                 É conhecido pela Serra da Capivara, suas pinturas rupestres, agricultura e cultura rica.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}