import { Servicos } from "../styled";
import { ServicoPropos } from "../types";
 
export default function Servico({ nome, descricao }: ServicoPropos) {
    return (
        <Servicos>
            <div className="servicos-container">
                <div className="servico-card">
                    <h2 className="titulo">{nome}</h2>
                    <p className="descricao">{descricao}</p>
                </div>
            </div>
            
        </Servicos>
    );
}
 