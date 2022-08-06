import Image from 'next/image'
import Link from 'next/link';
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link href='/'>
          <a className="navbar-brand p-0" href="#">
            <Image width={64} height={30} src="/logo-white.svg" alt="logo" />
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link" aria-current="page" href="#">Início</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/professores">
                <a className="nav-link" href="#">Professores</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/disciplinas">
                <a className="nav-link" href="#">Disciplinas</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/sobre">
                <a className="nav-link" href="#">Sobre</a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Campus (em breve)</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Em breve..." aria-label="Pesquisar" disabled/>
            <button className="btn btn-light d-flex align-items-center justify-content-center" type="submit" disabled>
              <BsSearch/>
            </button>
          </form>
        </div>
      </div>
    </nav>
  </>);
}

export default Navbar;