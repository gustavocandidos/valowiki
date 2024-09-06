function pesquisar() {

    // Obtém os elementos do DOM para o campo de busca e a div de resultados
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('resultados-pesquisa');
  
    // Adiciona um ouvinte de eventos ao campo de busca para monitorar as alterações
    //searchInput.addEventListener('input', () => {
      // Obtém o termo de busca em minúsculas
      const termoBusca = searchInput.value.toLowerCase();
      // Limpa a div de resultados para cada nova busca
      searchResults.innerHTML = '';
  
      // Itera sobre cada agente para verificar se o nome contém o termo de busca
      agentes.forEach(agente => {
        if (agente.nome.toLowerCase().includes(termoBusca)||agente.descricao.toLowerCase().includes(termoBusca)) {
          // Cria um novo elemento div para cada agente encontrado
          const div = document.createElement('div');
          // Preenche a div com as informações do agente
          div.innerHTML = `
            <div class="item-resultado">
            <h2>${agente.nome}</h2>
            <img src="${agente.imagem}">
            <h5>${agente.descricao}</h5>
            <a href="${agente.link}" target="_blank">Mais informações</a>
            </div>
          `;
          // Adiciona a div à lista de resultados
          searchResults.appendChild(div);
        }
      });
  //  });
  }