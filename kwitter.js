//função para adicionar nome usuário no local storage
function addUsuario() {
  //pega o nome do usuario digitado no HTML pelo ID
  nome_usuario = document.getElementById("nome_usuario").value;
  //add o nome do usuario no local storage
  localStorage.setItem("nome_usuario", nome_usuario);
    //redireciona para a pagina especificada
    window.location = "kwitter_page.html";
}