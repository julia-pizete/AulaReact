import { Link } from "react-router-dom";

export default function SantaCatarina() {
    return (
        <div>
            <h1>Estado de Santa Catarina</h1>
            <div className="conteudo">

                <img src="/SC.png" />
                <p>Santa Catarina é um estado localizado na região Sul do Brasil, e sua capital é
                    Florianópolis. O estado é conhecido por suas belas praias, serras e cidades com
                    forte influência de imigrantes europeus. Sua economia se destaca pela indústria,
                    agricultura, turismo e pesca. Santa Catarina também é famosa por suas paisagens
                    naturais e pela diversidade cultural.
                </p>
                <p><Link to="/">Voltar</Link></p>
            </div>
        </div>
    );


}
