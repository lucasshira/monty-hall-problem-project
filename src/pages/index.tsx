import { useState } from "react";
import Porta from "../../components/Porta";
import PortaModel from "../../model/porta";
import { atualizarPortas, criarPortas } from "../../functions/portas";
// import Presente from "../../components/Presente";

export default function Home() {
  const [portas, setPortas] = useState(criarPortas(5, 3));

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} onChange={novaPorta => {
        setPortas(atualizarPortas(portas, novaPorta));
      }} />
    })
  }

  return (
    <div style={{ display: "flex" }}>
      {renderizarPortas()}
    </div>
  );
}