import { Link } from "react-router-dom";
export default function Roraima() {
    return (
        <div>
            <h1>Estado de Roraima</h1>
            <div className="conteudo">


            <img src="/RR.png" />



                <p>
                Roraima é um estado localizado na Região Norte do Brasil. Sua capital é Boa Vista. 
                O estado faz fronteira com a Venezuela e a Guiana e possui belas paisagens naturais.
                 Roraima também abriga parte da Floresta Amazônica e o Monte Roraima, um de seus principais pontos turísticos.
                 Sua economia destaca-se pela agricultura, pecuária e comércio.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>

    );


}