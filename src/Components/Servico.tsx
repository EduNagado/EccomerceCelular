import { ServicoPropos } from "../types";
import { Servicos } from "../styled";

export default function Servico({ nome, descricao }: ServicoPropos) {
    return (
        <Servicos>
            <div className="servico-intro">
                <h2>Nossas áreas de Serviço</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, numquam tenetur, a ducimus voluptatem fugiat modi dolorem quaerat culpa fuga quae error nulla recusandae consequuntur ab expedita! Nemo, exercitationem.</p>
            </div>
            <div className="servico-card">
                <h2 className="titulo">{nome}</h2>
                <p className="descricao">{descricao}</p>
            </div>
        </Servicos>
    );
}
