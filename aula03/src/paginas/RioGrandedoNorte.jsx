import { Link } from "react-router-dom";
export default function RioGrandedoNorte () {
    return (
        <div>
            <h1>Estado  do Rio Grande do Norte</h1>
            <div className="conteudo">


                <img src="/RN.png" />

                <p>
                O Rio Grande do Norte é um estado do Nordeste do Brasil, cuja capital é Natal. 
                É conhecido por suas belas praias, dunas e paisagens naturais. O turismo é uma atividade importante para sua economia, além da agricultura e da pesca.
                 Sua cultura também é marcada por festas e comidas típicas.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}