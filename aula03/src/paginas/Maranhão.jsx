import { Link } from "react-router-dom";
export default function Maranhao() {
    return (
        <div>
            <h1>Estado do Maranhão</h1>
            <div className="conteudo">


            <img src="/MA.png" />



                <p>
                O Maranhão (MA) é um estado do Nordeste do Brasil. Sua capital é São Luís. 
                É conhecido pelos Lençóis Maranhenses, pelo Bumba Meu Boi e por sua rica cultura e culinária.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>

    );


}