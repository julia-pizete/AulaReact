import { Link } from "react-router-dom";
export default function MatoGrosso() {
    return (
        <div>
            <h1>Estado de Mato Grosso </h1>
            <div className="conteudo">

                <img src="/MT.png" />

                <p>
                Mato Grosso é um estado da Região Centro-Oeste do Brasil. Sua capital é Cuiabá.
                 O estado é conhecido pelo Pantanal, pelo Cerrado e pela Amazônia, além de ter uma forte produção agrícola e pecuária.
                  Mato Grosso também possui muitas belezas naturais e grande diversidade de animais e plantas.

                </p>
              

          <p>
          <Link to="/">Voltar</Link>
         </p>

            </div>


        </div>

    );


}