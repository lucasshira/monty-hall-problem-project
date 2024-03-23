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
          <EntradaNumerica text="Number of doors" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text="Door with gift" value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} />
        </Cartao>
        <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
          <Cartao bgcolor="#28a085">
            <h1 className={styles.link}>Start</h1>
          </Cartao>
        </Link>
      </div>
    </div>
  );
}