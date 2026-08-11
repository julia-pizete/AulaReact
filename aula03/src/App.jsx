import {BrowserRouter, Routes, Route} from"react-router-dom";

import Home from "./paginas/Home";
import SaoPaulo from "./paginas/SaoPaulo";
import MinasGerais from "./paginas/MinasGerais";
import RioJaneiro from "./paginas/RioJaneiro";
import EspiritoSanto from "./paginas/EspiritoSanto";
import Parana from"./paginas/Parana";
import SantaCatarina from"./paginas/SantaCatarina";
import RioGrandedoSul from "./paginas/RioGrandedoSul";
import Acre from "./paginas/Acre";



export default function App()
{
return(
<BrowserRouter>

<Routes>

<Route path="/" element={<Home />} />

<Route path="/estados/sp" element={<SaoPaulo />}  />
<Route path="/estados/mg" element={<MinasGerais />}  />
<Route path="/estados/rj" element={<RioJaneiro />}  />
<Route path="/estados/es" element={<EspiritoSanto />}  />
<Route path="/estados/pr" element={<Parana/>}  />
<Route path="/estados/sc" element={<SantaCatarina />}  />
<Route path="/estados/rs" element={< RioGrandedoSul/>}  />
<Route path="/estados/ac" element={< Acre/>}  />






</Routes>

</BrowserRouter>



);


}