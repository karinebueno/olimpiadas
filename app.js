// console.log(dados[0].descricao);

function pesquisar() {
    // Essa função é responsável por realizar a pesquisa e exibir os resultados na página.
  
    // Seleciona a seção onde os resultados serão exibidos pelo ID "resultados-pesquisa"
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado.  Você precisa digitar o nome de um atleta ou esporte</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowercase()

    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada elemento do array "dados" (supondo que "dados" seja um array de objetos)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        //se titulo includes campoPesquisa,então..faça
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank"> Mais informações</a>
            </div>
          `;
        }
        //console.log(dado.titulo.includes(campoPesquisa))
      // Concatena HTML para cada resultado, formatando o título, descrição e link
     
    }
    //se resultado não existir, faça essa ação
    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
    }
  
    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }


