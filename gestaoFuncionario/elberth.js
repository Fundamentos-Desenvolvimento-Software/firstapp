let funcionarios = [];

function incluirFuncionario(){
  const nome = prompt("Digite o nome do funcionário: ");
  const idade = parseInt(prompt("Digite a idade do funcionário: "));
  const cargo = prompt("Digite o cargo do funcionário: ");
  const salarioBruto = parseFloat(prompt("Digite o salário bruto do funcionário: "));
  const experiencia = parseInt(prompt("Digite a experiência do funcionário (1 - 5): "));

  funcionarios.push({nome, idade, cargo, salarioBruto, experiencia});
  
  alert("O Funcionário cadastrado com sucesso!!!");
}

function exibirTodos(){
  let lista = "";
  for(let i = 0; i < funcionarios.length; i++){
    const func = funcionarios[i];
    lista = lista + "Funcionário "+(i+1)+": Nome: " + func.nome + "\n";
  }
  alert("Funcionários: \n\n" + lista);    
}

function exibirIndividual(){
  const indice = parseInt(prompt("Digite o índice do funcionário: "));

  if(indice >= 0 && indice < funcionarios.length){
    const func = funcionarios[indice];
    alert("Funcionários: \n\n Funcionário "+(indice+1)+": Nome: " + func.nome + "\n");    
  } else {
    alert(indice + " não é um índice válido!!!")
  }
}

function main(){
  let opcao;

  do{
    opcao = parseInt(prompt("Menu:\n" +
                      "1 - Incluir Funcionário\n" +
                      "2 - Exibir todos\n" +
                      "3 - Exibir individual\n" +
                      "7 - Sair"));

    switch(opcao){
      case 1:
        incluirFuncionario();
        break;
        
      case 2:
        exibirTodos();
        break;

      case 3:
        exibirIndividual();
        break;

      case 7:
        alert("Saindo do programa...");
        break;
        
      default:
        alert("Opção inválida!!!");
    }

  } while(opcao != 7);
}

main();