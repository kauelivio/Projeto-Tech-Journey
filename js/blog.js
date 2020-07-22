
document.getElementById('btn-comentar').onclick = function () { adicionarComentario() };

function adicionarComentario() {

    

    let arrayComentarios = document.getElementById('comentarios').innerHTML;
    let comment = document.getElementById('b-comentar').value;

    let textNome = document.getElementById('b-nome').value;
    let textAssunto = document.getElementById('b-assunto').value;

    arrayComentarios = arrayComentarios + "<li> <div> <span>" 
    + textNome + 
    "</span> <span>•</span> <span>" 
    + textAssunto + 
    "</span> </div> <div>"
    + comment + 
    "</div> </li>";

    /* arrayComentarios.innerHTML = comment; */

    document.getElementById('comentarios').innerHTML = arrayComentarios;

    document.getElementById('b-comentar').value = "";
    document.getElementById('b-nome').value = "";
    document.getElementById('b-assunto').value = "";

}