let adicionarConvidado = []

function adicionar() {

  let nomes = document.getElementById("convidado").value
  let idade = document.getElementById("idade").value
  let email = document.getElementById("email").value

  if(nomes === ""){
    return alert("Favor, preencher o nome do convidado.")
  }
  let convidado = {
    nome: nomes,
    idade: idade,
    email: email
  };
  adicionarConvidado.push(convidado)
  atualizar()

}

function atualizar() {
  let table = document.getElementById("table")
  table.innerHTML = ""
  document.getElementById("section").style.visibility = "visible"
  for (var i = 0; i < adicionarConvidado.length; i++) {
    table.innerHTML += `
   <tbody>
    <tr>
      <th scope="row">${i + 1}</th>
      <td>${adicionarConvidado[i].nome}</td>
      <td>${adicionarConvidado[i].idade}</td>
      <td>${adicionarConvidado[i].email}</td>
      <td><img src="./img/excluir.svg" onclick="excluir()" alt="Botão Excluir" title="Excluir Registro" height="25" width="25">
      <img src="./img/edit.svg" alt="Botão Editar" title="Editar Registro" height="25" width="25"></td></td>
    </tr>
  </tbody>
    `
  }

}

function excluir() {

  for (var i = 0; i < adicionarConvidado.length; i++) {
    adicionarConvidado.pop(adicionarConvidado[i])
    document.getElementById("table").deleteRow(i)
    
  }
  ;
}