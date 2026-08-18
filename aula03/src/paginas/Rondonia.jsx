import { Link } from "react-router-dom";
export default function Rondonia() {
    return (
        <div>
            <h1>Estado de Rondonia</h1>
            <div className="conteudo">


            <img src="/RO.png" />



                <p>
                    Rondônia é um estado localizado na Região Norte do Brasil. Sua capital é Porto Velho.
                     O estado possui uma grande área de floresta amazônica e muitos rios. Rondônia se destaca pela agricultura, 
                     pecuária e produção de alimentos.
                     Também possui belas paisagens naturais e uma cultura rica e diversificada.
                    
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>

    );


}