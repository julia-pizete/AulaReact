export default function Exercicio9 ({ vendas, salario }) {
    let comissao = vendas * 0.06;
    let salariofinal = salario + comissao;
 
    return (
        <div>
          <p>Total de Vendas: R$ {vendas.toFixed(2)}</p>
          <p>Salário Base: R$ {salario.toFixed(2)}</p>
          <p>Comissão (6%): R$ {comissao.toFixed(2)}</p>
          <p>Salário Final: R$ {salariofinal.toFixed(2)}</p>
        </div>
    );
}
 