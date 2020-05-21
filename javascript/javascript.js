let adicionarConvidado = []
let editando = false
let objetoPosicao = 0

function adicionar() {

  if (editando) {
    let nomes = document.getElementById("convidado").value
    let idade = document.getElementById("idade").value
    let email = document.getElementById("email").value

    adicionarConvidado[objetoPosicao].nome = nomes
    adicionarConvidado[objetoPosicao].idade = idade
    adicionarConvidado[objetoPosicao].email = email

    atualizar()
    editando = false
    document.getElementById("adicionar").innerHTML = `<span id="adicionar">Adicionar</span>`

  } else {
    let nomes = document.getElementById("convidado").value
    let idade = document.getElementById("idade").value
    let email = document.getElementById("email").value

    if (nomes === "") {
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
      <td><img src="./img/excluir.svg" onclick="excluir(${i})" alt="Botão Excluir" title="Excluir Registro" height="25" width="25">
      <img src="./img/edit.svg" onclick="editarIcone(${i})" alt="Botão Editar" title="Editar Registro" height="25" width="25"></td></td>
    </tr>
  </tbody>
    `
  }

  document.getElementById("convidado").value = ""
  document.getElementById("idade").value = ""
  document.getElementById("email").value = ""

}

function excluir(index) {
  adicionarConvidado.splice(index, 1)
  atualizar()
  if(adicionarConvidado.length === 0){
    document.getElementById("section").style.visibility = "hidden"
  }
}


function editarIcone(index) {
  editando = true
  objetoPosicao = index

  document.getElementById("adicionar").innerHTML = `<span id="adicionar">Editar</span>`

  document.getElementById("convidado").value = adicionarConvidado[index].nome
  document.getElementById("idade").value = adicionarConvidado[index].idade
  document.getElementById("email").value = adicionarConvidado[index].email


}

