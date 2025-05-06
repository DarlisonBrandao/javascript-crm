
let clientes = JSON.parse(sessionStorage.getItem("clientes")) || [];


function carregarClientes(listaDeClientes){
  let tbodyElement = document.querySelector("#tabela");
  tbodyElement.innerHTML = ""; // Limpa o conteúdo atual da tabela
  listaDeClientes.map((cliente) => {
    tbodyElement.innerHTML += `
      <tr class="*leding-[40pc]">
        <td>${cliente.nome}</td>
        <td>${cliente.email}</td>
        <td>${cliente.telefone}</td>
        <td>${cliente.data}</td>
        <td clas="w-[100px] flex justify-center gap-4">
                <box-icon name="pencil"></box-icon>
                <box-icon name="trash"></box-icon>
            </td>
      </tr>
      `;
})
}

carregarClientes(clientes);

function cadastrarCliente(form){
  event.preventDefault();
  // vão pegar os valores dos inputs do formulario e transformar em um objeto
  let formData = new FormData(form);
  let cliente = Object.fromEntries(formData.entries());

  // inserir o cliente no array de clientes
  clientes.push(cliente);
  sessionStorage.setItem("clientes", JSON.stringify(clientes));
  mostrarOverlay();
  carregarClientes(clientes);
}