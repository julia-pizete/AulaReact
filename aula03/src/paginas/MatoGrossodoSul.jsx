import { Link } from "react-router-dom";
export default function MatoGrossodoSul() {
    return (
        <div>
            <h1>Estado do Mato Grosso do Sul</h1>
            <div className="conteudo">

                <img src="/MS.png" />

                <p>
                Mato Grosso do Sul é um estado da Região Centro-Oeste do Brasil. Sua capital é Campo Grande.
                 O estado é conhecido pelo Pantanal, suas belas paisagens naturais e sua rica diversidade de animais e plantas.
                 A agricultura, a pecuária e o turismo são importantes para sua economia.

                </p>
              

             
             <p>
             <Link to="/">Voltar</Link>
              </p>

            </div>


        </div>

    );


}