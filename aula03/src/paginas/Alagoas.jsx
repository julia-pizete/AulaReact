import { Link } from "react-router-dom";
export default function Alagoas () {
    return (
        <div>
            <h1>Estado  de Alagoas</h1>
            <div className="conteudo">


                <img src="AL/.png" />

                <p>
                Alagoas é um estado localizado na Região Nordeste do Brasil. Sua capital é Maceió, conhecida por suas belas praias e águas claras.
                 O estado possui uma cultura rica, com músicas, danças e comidas típicas. Sua economia se destaca pelo turismo, agricultura e produção de cana-de-açúcar.
                 Alagoas também é conhecido por suas belas paisagens naturais.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}