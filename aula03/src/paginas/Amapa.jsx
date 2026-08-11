import { Link } from "react-router-dom";
export default function Amapa() {
    return (
        <div>
            <h1>Estado do Amapá</h1>
            <div className="conteudo">


                <img src="/AP.png" />

                <p>
                    O Amapá é um estado localizado na Região Norte do Brasil, e sua capital é Macapá.
                     O estado possui grande parte de seu território coberto pela Floresta Amazônica. 
                     É conhecido por suas belezas naturais, rios e diversidade de animais e plantas. 
                     Sua economia inclui agricultura, pesca, comércio e extrativismo.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}