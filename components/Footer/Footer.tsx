import styles from './footer.module.css';
import Image from 'next/image'

const Footer = () => {
  return (<>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0d6efd" fillOpacity="1" d="M0,192L120,197.3C240,203,480,213,720,186.7C960,160,1200,96,1320,64L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    <footer className={`${styles.footerContainer} d-flex align-items-center justify-content-center flex-column`}>
      <Image width={64} height={30} src="/logo-white.svg" alt="logo" />
      <div className='text-center'>
        Desenvolvido com carinho por <a href='https://www.instagram.com/vic_dant1/' target="_blank" rel="noreferrer noopener">@vic_dant1</a><br />
        <p className="m-0">Todos os direitos reservados &copy; 2022</p>
      </div>
    </footer>
  </>);
}

export default Footer;