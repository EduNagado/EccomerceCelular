import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Aparelhos from "./Components/Aparelhos";
import Cabecalho from "./Components/Cabecalho";
import Login from "./Components/Login";
import Propagandas from "./Components/Propagandas";
import Servico from './Components/Servico';
 
import { PaiProdutos, PaiServico } from './styled';
 
// Importação das imagens de Aparelhos
import AirPodsPro2Img from './assets/airpods-pro-2.jpeg';
import iMacAzulImg from './assets/iMac.jpeg';
import iPadImg from './assets/ipad.jpg';
import iPhone14Img from './assets/iphone-14.jpg';
import iPhone15Img from './assets/iphone-15.jpg';
import iPhone16ProImg from './assets/iphone-16.jpg';
 
 
function App() {
  const AparelhosEletronicos = [
    { nome: 'iPhone 16 Pro', Image: iPhone16ProImg, descricao: 'Tela Super Retina XDR, chip A17 Bionic, câmera tripla com LiDAR, 5G.', valor: 10.499 },
    { nome: 'iPhone 15', Image: iPhone15Img, descricao: 'Tela Super Retina XDR, chip A16 Bionic, câmera dupla, 5G.', valor: 6.499 },
    { nome: 'iPhone 14', Image: iPhone14Img, descricao: 'Tela Super Retina XDR, chip A15 Bionic, câmera dupla, 5G.', valor: 5.799 },
    { nome: 'iMac azul', Image: iMacAzulImg, descricao: 'Chip M3, CPU 8 núcleos, GPU 8 núcleos, Neural Engine 16 núcleos.', valor: 14.499 },
    { nome: 'iPad', Image: iPadImg, descricao: 'Tela Retina, chip A14 Bionic, câmera de 12 MP, 5G', valor: 3.999 },
    { nome: 'AirPods Pro 2', Image: AirPodsPro2Img, descricao: 'Cancelamento de ruído, drivers personalizados e resistência IPX4.', valor: 2.599 },
  ];
  const ServicosCard = [
    { nome: 'Assistência Técnica e Suporte:', descricao: 'Ofereça suporte técnico para resolver problemas comuns e realizar manutenção dos aparelhos. Isso pode incluir diagnósticos remotos, tutoriais em vídeo, e atendimento ao cliente para solucionar problemas.' },
    { nome: 'Garantia e Planos de Proteção', descricao: 'Disponibilize planos de garantia estendida e proteção contra danos acidentais para os produtos vendidos. Isso pode tranquilizar os clientes e aumentar a confiança na compra.' },
    { nome: 'Consultoria Personalizada', descricao: 'Ofereça serviços de consultoria para ajudar os clientes a escolher o melhor aparelho com base em suas necessidades e preferências. Isso pode ser feito por chat ao vivo, por telefone ou até mesmo em consultas presenciais.' },
    { nome: 'Serviço de Entrega e Instalação', descricao: 'Proporcione serviços de entrega rápida e instalação dos aparelhos no local de uso do cliente. Isso pode incluir a configuração inicial e a orientação sobre como utilizar os produtos de forma eficaz.' }
  ]
 
 
 
  return (
 
    <Router>
      <Cabecalho />
      <Routes>
        <Route path="/" element={
          <>
            <Propagandas />
            <PaiProdutos>
              {AparelhosEletronicos.map((aparelho, i) => (
                <Aparelhos
                  key={i}
                  nome={aparelho.nome}
                  Image={aparelho.Image}
                  descricao={aparelho.descricao}
                  valor={aparelho.valor}
                />
              ))}
            </PaiProdutos>
            <PaiServico >
              <h2 className='Paih2'>Nossas áreas de Serviço</h2>
              <p className='Paip'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, numquam tenetur, a ducimus voluptatem fugiat modi dolorem quaerat culpa fuga quae error nulla recusandae consequuntur ab expedita! Nemo, exercitationem.</p>
 
              {ServicosCard.map((servicos, i) => (
                <Servico
                  key={i}
                  nome={servicos.nome}
                  descricao={servicos.descricao}
                />
              ))}
            </PaiServico>
 
          </>
        } />
        <Route path="/login" element={<Login />} />
 
      </Routes>
 
    </Router>
  );
}
 
export default App;