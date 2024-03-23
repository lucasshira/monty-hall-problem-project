import styles from '../../../styles/Jogo.module.css';
import Link from 'next/link';
import { useEffect, useState } from "react";
import Porta from "../../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../../functions/portas";
import { useRouter } from 'next/router';
import PortaModel from '../../../../model/porta';

interface RouterQuery {
  portas?: number;
  temPresente?: number;
}

export default function jogo() {
  // useRouter para obter acesso aos parametros de consulta da rota passados na URL
  const router = useRouter();
  const [portas, setPortas] = useState<PortaModel[]>([]);
  const [valido, setValido] = useState(false);
  const defaultValue = 1;

  useEffect(() => {
    const query = router.query as RouterQuery;
    if (query.portas !== undefined && query.temPresente !== undefined) {
      const portas: number = +query.portas;
      const temPresente: number = +query.temPresente;
      setPortas(criarPortas(portas, temPresente));
    }
  }, [router.query]);

  useEffect(() => {
    const query = router.query as RouterQuery;
    if (query.portas !== undefined && query.temPresente !== undefined) {
      const portas: number = +query.portas;
      const temPresente: number = +query.temPresente;

      const valid = portas >= 3 && portas <= 100;
      const validPresente = temPresente >= 1 && temPresente <= portas;
      setValido(valid && validPresente);
    }
  }, [portas]);

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
        {valido ? renderizarPortas() : <h1>Invalid number of doors/gift to start the game.</h1>}
      </div>
      <div className={styles.botoes}>
        <Link href='/'>
          <button>Restart Game</button>
        </Link>
      </div>
    </div>
  )
};