import Link from "next/link";
import Cartao from "../../components/Cartao";
import styles from '../styles/Form.module.css';
import EntradaNumerica from "../../components/EntradaNumerica";
import { useState } from "react";

export default function Form() {
  const [qtdePortas, setQtdePortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Quantidade de Portas" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text="Porta com Presente" value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} />
        </Cartao>
        <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
          <Cartao bgcolor="#28a085">
            <h2 className={styles.link}>Iniciar</h2>
          </Cartao>
        </Link>
      </div>
    </div>
  );
}