let adicionarConvidado = []

function adicionar() {

  let nomes = document.getElementById("convidado").value
  let idade = document.getElementById("idade").value
  let email = document.getElementById("email").value
  let convidado = {
    nome: nomes,
    idade: idade,
    email: email
  };
  adicionarConvidado.push(convidado)
  atualizar()

}

function atualizar() {

  let lista = document.getElementById("lista")
  lista.innerHTML = ""
  lista.innerHTML = `<h1>Lista atualizada</h1>`
 

  for (var i = 0; i < adicionarConvidado.length; i++) {
    lista.innerHTML += `
  <table border=1 cellspacing=0 cellpadding=2 bordercolor="666633">
    <th colspan="3">Convidado ${i+1}</th>
  <tr>
    <th>Nome</th>
    <th>Idade</th>
    <th>Email</th>
  </tr>
    <tr>
      <td>${adicionarConvidado[i].nome}</td>
      <td>${adicionarConvidado[i].idade}</td>
      <td>${adicionarConvidado[i].email}</td>
    </tr>
    </table></br>`
  
  }

}