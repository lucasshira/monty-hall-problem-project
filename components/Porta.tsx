import PortaModel from '../model/porta';
import styles from '../src/styles/Porta.module.css';

interface PortaProps {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void
}

const Porta = (props: PortaProps) => {
  const porta = props.value
  const selecionada = porta.selecionada ? styles.selecionada : ''

  const alternarSelecao = (e: React.MouseEvent<HTMLDivElement>) => props.onChange(porta.alternarSelecao());

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>{porta.numero}</div>
            <div className={styles.macaneta}></div>
          </div>
        </div>
      <div className={styles.chao}></div>
    </div>
  );
}
 
export default Porta;