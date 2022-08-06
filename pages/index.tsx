import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tell me more | Aqui você é livre</title>
      </Head>
      <main className={`${styles.main} container`}>
        <section className='mt-5'>
          <div className="row">
            <div className="col-md-6">
              <h4 className='display-5'>Precisamos de você...</h4>
              <p>Todo semestre é a mesma coisa, ficamos perdidos e recorremos às pessoas do grupo de Whatsapp. As vezes funciona, mas geralmente é um fuzuê gigantesco. O Tell me more chegou para acabar com isso.</p>
              
              <div className='mt-3'>
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>Não paguem VGA com Sâmya, pelo amor de Deus!!.</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Ser humano decente, <cite title="Atemporal">Atemporal</cite>
                  </figcaption>
                  <blockquote className="blockquote">
                    <p>É loucura pagar FMC com Sócrates?</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Calouro perdido, <cite title="Primeiro semestre">Primeiro semestre</cite>
                  </figcaption>
                  <blockquote className="blockquote">
                    <p>Louro José de Geometria Euclidiana presta?</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Reprovado, <cite title="Segundo semestre">Segundo semestre</cite>
                  </figcaption>
                </figure>
              </div>
              <div className='mt-4'>
                <button className={`btn btn btn-outline-primary ${styles.writteButton}`}>Mudar a história de alguém</button>
              </div>
            </div>
            <div className={`col-md-6 d-flex align-items-center justify-content-center ${styles.imgContainer}`}>
              <img className={styles.image} src="/educator.svg" alt="Imagem de colaboração"  />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
