import styles from './sobre.module.css'

const Sobre = () => {
  return (<>

    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-5 text-center">É bom tê-lo por aqui ¯\_(ツ)_/¯</h1>
          <h4 className='mt-3'>Olá, gostaria de te conhecer</h4>
          <p>Primeiramente, seja bem vindo ao Tell Me More. Meu nome é João Victor Dantas, mas pode me chamar de JV. Hoje compartilho com a maioria dos que estão acessando essa página o triste status de aluno. Para guiar nossas escolhas, dada tamanha ineficiência da coordenação de curso do BTI, decidi criar essa página. Conto com a ajuda de vocês para que possamos criar uma comunidade cada vez mais forte. Deixo abaixo quatro frases que julgo importantes para o conhecimento de vocês, cedo ou tarde vocês as verão refletidas em suas vidas, seja pessoal ou acadêmica. Que a força esteja com vocês.</p>
          <h4>Sapere aude</h4>
          <p>Ouse saber, nunca aceite que ninguém te diga que já basta de conhecimento.</p>
          <h4>Libertas quæ sera tamen</h4>
          <p>Liberdade, ainda que tardia (eu ouvi falar do diploma?).</p>
          <h4>Memento vivere</h4>
          <p>A única coisa que nos diferencia dos demais animais é o fato de que sabemos que vamos morrer, dessa forma, o intervalo entre nosso nascimento e morte torna-se o bem mais precioso que temos. Valorize sua família, seus amigos e principalmente a si mesmo. A vida é curta: seus avós, pais e amigos são mortais. Pense nisso.</p>
          <h4>Carpe diem</h4>
          <p>Curta o momento, vez ou outra presenteie-se com um vale foda-se bem dado ao semestre. Ninguém vai se importar com um 2.1 em FMC, vai?</p>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center flex-column">
          <img className={`${styles.founderImg}`} src="/img-jv.jpg" alt="founder-img" />
          <div className='text-center'>
            <p className="text-muted m-0">João Victor Dantas</p>
            <p className="text-muted m-0">Fundador do <b>Tell Me More</b></p>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default Sobre;