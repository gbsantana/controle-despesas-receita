# Controle de Despesas e Receitas - Aplicação VueJS

## Descrição do Projeto
Esta aplicação VueJS foi desenvolvida para o controle de despesas e receitas em uma conta corrente, permitindo o registro, visualização e gerenciamento de transações financeiras. A aplicação mantém uma lista de transações, cada uma com uma descrição e um valor, onde valores positivos representam créditos e valores negativos representam débitos.

## Funcionalidades
1. **Lista de Transações**:
   - A aplicação exibe uma lista das transações registradas, mantendo a ordem em que foram inseridas pelo usuário.

2. **Registro de Novas Transações**:
   - Um formulário permite que o usuário adicione novas transações, com campos para a descrição e o valor.

3. **Remoção de Transações**:
   - É possível remover transações da lista.

4. **Troca de Ordem das Transações**:
   - As transações podem ser movidas para cima ou para baixo na lista, e os saldos são atualizados automaticamente após cada movimentação.

5. **Destaque de Créditos e Débitos**:
   - Os créditos são destacados em verde, enquanto os débitos são exibidos em vermelho.

6. **Indicação de Saldo Negativo**:
   - Quando o saldo é negativo, ele é exibido com fundo vermelho e texto amarelo, alertando o usuário visualmente.

7. **Paginação da Lista de Transações**:
   - A lista de transações é paginada, com a exibição de 5 transações por página.

## Tecnologias Utilizadas
- **VueJS**: Framework principal para desenvolvimento da interface do usuário.
- **HTML/CSS**: Marcação e estilização da aplicação.
- **JSFiddle**: Plataforma onde a aplicação pode ser executada.

## Como Executar
1. Acesse o site [JSFiddle](https://jsfiddle.net/).
2. Insira o código VueJS da aplicação nos respectivos campos de HTML, CSS e JavaScript.
3. Clique em **Run** para visualizar e interagir com a aplicação.

## Estrutura do Projeto
- **Componente principal (`App.vue`)**: Gerencia a lista de transações e o estado da aplicação.
- **Formulário de entrada**: Componente para adicionar novas transações.
- **Lista de transações**: Exibe cada transação com a funcionalidade de remoção e troca de ordem.
- **Paginação**: Controla a exibição de 5 transações por vez.

## Demonstração das Funcionalidades
### Adicionar Transação
- Preencha o formulário com a descrição e o valor e clique em **Adicionar**.
- Transações com valores positivos são exibidas em verde, e negativos em vermelho.

### Remover Transação
- Clique no botão **Remover** ao lado da transação desejada.

### Trocar Ordem
- Use os botões de **Subir** e **Descer** para reorganizar as transações na lista.

### Paginação
- Navegue entre as páginas para visualizar todas as transações.

## Considerações Finais
Esta aplicação oferece uma maneira intuitiva e eficiente de gerenciar receitas e despesas, com foco na facilidade de uso e clareza visual.