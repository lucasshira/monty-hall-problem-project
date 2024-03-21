import Link from "next/link";
import Cartao from "../../components/Cartao";
import styles from '../styles/Form.module.css';

export default function Form() {
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao></Cartao>
      </div>
      <div>
        <Cartao></Cartao>
        <Link href={`/jogo/4/2`}>
          <Cartao bgcolor="#28a085">
            <h2 className={styles.link}>Iniciar</h2>
          </Cartao>
        </Link>
      </div>
    </div>
  );
}