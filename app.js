
//var conta = ["nome", 1, 10]
// 0 =>  "nome" => 0
// 1 => "1" => num conta
// 2 => "10" => saldo
// var contas = [ ["Samuel", 1, 10],  ["José", 2, 10]]

var contas = [["MeRemova", 1, 0]]

const SALDO_INICIAL = 10

const NOME_CONTA = 0
const NUM_CONTA = 1
const SALDO_CONTA = 2


function gerenciaConta(valor, numeroConta) {
  if(valor > 0) {
    deposita(valor, numeroConta)
  } else if(valor < 0) {
    saque(valor * -1, numeroConta)
  }
}
function deposita(valor, numeroConta) {
  //conta[2] += valor
  
  index = buscaIndiceContas(numeroConta)

  contas[index][SALDO_CONTA] += valor
}


function saque(valor, numeroConta) {
  //TODO: verificar se ele pode sacar

  
  index = buscaIndiceContas(numeroConta)

  contas[index][SALDO_CONTA] -= valor
}

function encerrarConta(numeroConta) {
  var resposta = prompt("Digite 'remover' para confirmar a exclusão");
  if(resposta != 'remover') {
    return alert("Operação cancelada!")
  }


  index = buscaIndiceContas(numeroConta)
  conta = contas[index]

  if (conta[SALDO_CONTA] != 0) {
    return alert("VOCÊ NÃO PODE APAGAR UMA CONTA COM SALDO")
  }

  index = buscaIndiceContas(conta[NUM_CONTA])

  contas.splice(index, 1)


}

function novaConta(nome) {
  ultimaConta = contas[contas.length-1]
  if (contas.length > 0) {
    proximaConta = ultimaConta[NUM_CONTA] + 1
  } else {
    proximaConta = 1
  }
 

  contas.push([nome, proximaConta, SALDO_INICIAL])
}

function buscaConta(numeroConta) {
  for (let i = 0; i < contas.length; i++) {
    const conta = contas[i];
    if (conta[NUM_CONTA] == numeroConta) {
      return conta
    }
  }

  return null
}

function buscaIndiceContas(numeroConta) {
  for (let i = 0; i < contas.length; i++) {
    const conta = contas[i];
    if (conta[NUM_CONTA] == numeroConta) {
      return i
    }
  }

}

// novaConta("Maria")
// novaConta("Joaquina")
// novaConta("Zezinho")

// console.log(contas)

// var contaDois = buscaConta(2)
// var contaUm = buscaConta(1)

// var contaVinte = buscaConta(20)
// console.log('Busca de contas: ',contaDois, contaVinte)



// deposita(20 ,contaDois)
// saque(5 ,contaUm)
// console.log('contas: ', contas)


// saque(5, contaUm)

// encerrarConta(contaUm)

// console.log(contas)