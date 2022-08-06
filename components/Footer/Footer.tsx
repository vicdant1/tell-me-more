import styles from './footer.module.css';
import Image from 'next/image'

const Footer = () => {
  return (<>
    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eeeeee" fillOpacity="1" d="M0,288L1440,192L1440,320L0,320Z"></path></svg>
    <footer className={`${styles.footerContainer} d-flex align-items-center justify-content-center flex-column`}>
      <Image width={64} height={30} src="/Vector.svg" alt="logo" />
      <div>
        Desenvolvido com carinho por <a href='https://www.instagram.com/vic_dant1/' target="_blank" rel="noreferrer noopener">@vic_dant1</a>
      </div>
    </footer>
  </>);
}

export default Footer;