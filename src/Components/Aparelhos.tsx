import { PropagandaProps } from "../types";
import { Aparelhosss } from "../styled";

export default function Aparelhos({ nome ,Image, descricao, valor}: PropagandaProps) {
  return (
    <Aparelhosss  id="produtos">
      <section className="Pai">
        <main className="Cards">
            <p className="Titulo">{nome}</p>
            <img src={Image} alt={nome} />
            <div className="ParteInferior">
              <p className="Descricao">{descricao}</p>
              <p className="Valor">R${valor}</p>
              <button className="Comprar">Comprar</button>
            </div>
          </main>
      </section>
        
    </Aparelhosss>
    
  );
}
