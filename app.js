function pesquisar() {
    // Função responsável por pesquisar e exibir os resultados na seção "resultados-pesquisa"
    let section = document.getElementById("resultados-pesquisa"); // Obtém a seção onde os resultados serão exibidos

    let campoPesquisa = document.getElementById('campo-pesquisa').value;
    
    if(!campoPesquisa){
        section.innerHTML = "<p>Por favor, digite algo para pesquisar.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = ""; 
    let titulo = "";
    let descricao = "";
    let tag = ";"

    // Itera sobre cada dado na array 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tag = dado.tag.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)){
            // Constrói o HTML para cada item de resultado
            resultados += `
            <div class="item-resultado">
            <h3><a href="#" target="_blank">${dado.titulo}</a></h3>
            <img class="imagem-destaque" src=${dado.imagem} alt=${dado.titulo}>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="tag">${dado.tag}</p>
            <a href=${dado.link} target="_blank">Pagina na steam</a>
            </div>
            `;
            }
        }

        if (!resultados) {
            resultados = "<p>Resultado não encontrado</p>"
        }
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}
