import { Link } from "react-router-dom";
export default function Paraiba() {
    return (
        <div>
            <h1>Estado da Paraíba </h1>
            <div className="conteudo">


                <img src="/PB.png" />

                <p>
                A Paraíba é um estado localizado na Região Nordeste do Brasil. Sua capital é João Pessoa, uma cidade conhecida por suas belas
                 praias e áreas verdes. O estado possui paisagens naturais, cultura rica e comidas típicas deliciosas. 
                 Sua economia se destaca pelo turismo, agricultura, indústria e comércio. 
                A Paraíba também é conhecida pelas festas juninas e pelo artesanato.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}