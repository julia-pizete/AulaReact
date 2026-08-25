import { Link } from "react-router-dom";
export default function Para() {
    return (
        <div>
            <h1>Estado do Pará</h1>
            <div className="conteudo">

                <img src="/PA.png" />

                <p>
                O Pará é um estado localizado na Região Norte do Brasil. Sua capital é Belém, uma cidade conhecida por sua cultura e culinária.
                 O estado possui uma grande parte da Floresta Amazônica e é banhado por muitos rios.
                  O Pará também se destaca pela produção de açaí e por suas belas paisagens naturais.

                </p>
              

<p>
<Link to="/">Voltar</Link>
</p>

            </div>


        </div>

    );


}