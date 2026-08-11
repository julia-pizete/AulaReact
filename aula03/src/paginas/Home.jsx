import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
    return (
        <div>
            <h1>Aula 03 - Estudo de Rotas</h1>

            <div className="conteudo">
                <h3>Região Sudeste</h3>
                <ul>
                    <li><Link to="/estados/sp">São Paulo</Link></li>
                    <li><Link to="/estados/mg">Minas Gerais</Link></li>
                    <li><Link to="/estados/rj">Rio de Janeiro</Link></li>
                    <li><Link to="/estados/es">Espírito Santo</Link></li>
                    
                </ul>
            </div>

            <div className="conteudo">

                <h3>Região Sul</h3>

                <ul>
                    <li><Link to="/estados/pr">Paraná</Link></li>
                    <li><Link to="/estados/sc">Santa Catarina</Link></li>
                    <li><Link to="/estados/rs">Rio Grande do Sul</Link></li>
                </ul>

            </div>
              <div className="conteudo">

                <h3>Região Norte</h3>

                <ul>
                    <li><Link to="/estados/ac">Acre</Link></li>
                    <li><Link to="/estados/"></Link></li>
                    <li><Link to="/estados/"></Link></li>
                    <li><Link to="/estados/"></Link></li>
                    <li><Link to="/estados/"></Link></li>
                    <li><Link to="/estados/"></Link></li>
                    <li><Link to="/estados/"></Link></li>


                </ul>

        </div>

    );


}
