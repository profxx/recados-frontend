const titulonovo = 
    document.getElementById("titulorecado");
const descricaonova = 
    document.getElementById("descricao");
let listaRecadosNovos = 
    document.getElementsByClassName(
        "lista-recados-novos");

let listaRecados = [];

function convertRecadoToLi(recado){
    return `
    <li class="recado-novo">
        <h4 class="titulo-recado">${recado.titulo}</h4>
        <p class="descricao-recado">${recado.descricao}</p>
        
        <div class="status">

            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label descricao-recado" for="flexRadioDefault1">
                    Lido
                </label>
                </div>

                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label descricao-recado" for="flexRadioDefault1">
                    Importante
                </label>
                </div>

        </div>
    </li>
    `
}

function criarNovoTitulo(){
       listaRecados.push({
            titulo: titulonovo.value,
            descricao: descricaonova.value,
            situacao: "Novo"
       });
       listaRecadosNovos.innerHTML += 
        convertRecadoToLi({
            titulo: titulonovo.value,
            descricao: descricaonova.value
        });
       titulonovo.value = "";
       descricao.value = "";
}
console.log(listaRecados);

