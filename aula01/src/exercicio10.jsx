export default function Exercicio10({ salarioBase }) {

    let gratificacao = salarioBase * 0.08;
    let salarioFinal = salarioBase + gratificacao;

    return (
        <div>
            <p>Salário Base: R$ {salarioBase.toFixed(2)}</p>
            <p>Gratificação (8%): R$ {gratificacao.toFixed(2)}</p>
            <p>Salário Final: R$ {salarioFinal.toFixed(2)}</p>
        </div>
    );
}