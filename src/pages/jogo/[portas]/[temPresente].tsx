import styles from '../../../styles/Jogo.module.css';
import Link from 'next/link';
import { useEffect, useState } from "react";
import Porta from "../../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../../functions/portas";
import { useRouter } from 'next/router';

export default function jogo() {
  // useRouter para obter acesso aos parametros de consulta da rota passados na URL
  const router = useRouter();
  const [portas, setPortas] = useState<PortaModel[]>([]);

  useEffect(() => {
    const portas: number = +router.query.portas
    const temPresente: number = +router.query.temPresente
    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} onChange={novaPorta => {
        setPortas(atualizarPortas(portas, novaPorta));
      }} />
    })
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPortas()}
      </div>
      <div className={styles.botoes}>
        <Link href='/'>
          <button>Reiniciar jogo</button>
        </Link>
      </div>
    </div>
  )
};