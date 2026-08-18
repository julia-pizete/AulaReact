import { Link } from "react-router-dom";
export default function Rondonia() {
    return (
        <div>
            <h1>Estado de Rondonia</h1>
            <div className="conteudo">


            <img src="/RO.png" />



                <p>
                Tocantins é um estado localizado na Região Norte do Brasil. Sua capital é Palmas.
                 O estado é conhecido por suas belas paisagens naturais, como o Jalapão, com cachoeiras, dunas e rios. 
                 Sua economia é baseada principalmente na agricultura, pecuária e comércio.
                 Tocantins também possui uma cultura rica e diversificada.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>

    );


}