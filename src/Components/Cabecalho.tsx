import { HeaderMenu } from '../styled';
import logo from '../assets/Logo.jpeg';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Cabecalho() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (section: string) => {
    if (location.pathname === '/login') {
      navigate('/', { state: { scrollTo: section } });
    } else {
      scrollToSection(section);
    }
  };

  return (
    <HeaderMenu>
      <nav>
        <div className="imgContainer">
          <img src={logo} alt="Logo da empresa" />
        </div>

        <ul className="HeaderMenu">
          <li className="li1" onClick={() => handleNavigation('home')}>Home</li>
          <li className="li1" onClick={() => handleNavigation('produtos')}>Produtos</li>
          <li className="li1" onClick={() => handleNavigation('servicos')}>Serviços</li>
        </ul>

        <ul className="RightHeaderMenu">
          <li className="li2" onClick={handleLoginClick}>Login</li>
        </ul>
      </nav>
    </HeaderMenu>
  );
}
