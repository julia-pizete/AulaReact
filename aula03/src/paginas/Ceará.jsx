import { Link } from "react-router-dom";
export default function Ceara() {
    return (
        <div>
            <h1>Estado do Ceará </h1>
            <div className="conteudo">


                <img src="CE/.png" />

                <p>
                O Ceará é um estado localizado na Região Nordeste do Brasil. Sua capital é Fortaleza, conhecida por suas belas praias.
                 O estado possui paisagens naturais, dunas e um clima quente durante boa parte do ano. Sua economia se destaca pelo turismo, 
                 agricultura, indústria e comércio.
                 O Ceará também é conhecido por sua cultura, artesanato e comidas típicas.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}