import { useState } from "react";
import Porta from "../../components/Porta";
import PortaModel from "../../model/porta";
import { atualizarPortas, criarPortas } from "../../functions/portas";
// import Presente from "../../components/Presente";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <h1>Formulario de Inicio</h1>
    </div>
  );
}