import Image from 'next/image'
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (<>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand p-0" href="#">
          <Image width={64} height={30} src="/Vector.svg" alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Início</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Professores</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Disciplinas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Campus (em breve)</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar"/>
            <button className="btn btn-outline-primary" type="submit">
              <BsSearch/>
            </button>
          </form>
        </div>
      </div>
    </nav>
  </>);
}

export default Navbar;