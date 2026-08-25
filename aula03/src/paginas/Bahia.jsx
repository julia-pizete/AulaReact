import { Link } from "react-router-dom";
export default function Bahia() {
    return (
        <div>
            <h1>Estado da Bahia</h1>
            <div className="conteudo">


                <img src="/BA.png" />

                <p>
                A Bahia é um estado localizado na Região Nordeste do Brasil. Sua capital é Salvador, uma cidade conhecida por sua história e cultura.
                 O estado possui belas praias, paisagens naturais e uma culinária muito famosa. 
                 A Bahia também se destaca pelas festas, músicas e danças, como o axé e a capoeira.
                 Sua economia inclui turismo, agricultura, indústria e comércio.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}