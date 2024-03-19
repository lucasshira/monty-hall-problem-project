import PortaModel from '../model/porta';
import styles from '../src/styles/Porta.module.css';
import Presente from './Presente';

interface PortaProps {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void
}

const Porta = (props: PortaProps) => {
  const porta = props.value
  const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

  // alterando porta selecionada ou nao
  const alternarSelecao = (e: React.MouseEvent<HTMLDivElement>) => props.onChange(porta.alternarSelecao());

  // abrindo a porta
  function abrir (e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
   props.onChange(porta.abrir());
  }

  // logica de estilo para a porta FECHADA
  function renderizarPorta() {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
          <div className={styles.macaneta} onClick={abrir}></div>
      </div>
    )
  }

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        {porta.fechada ? renderizarPorta() : porta.temPresente ? <Presente /> : false}
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
 
export default Porta;