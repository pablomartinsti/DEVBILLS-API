<h1>DevBill$ - Backend</h1>
<p>
    Bem-vindo ao repositório do backend do <strong>DevBill$</strong>, um sistema de gerenciamento financeiro pessoal. 
    Este backend foi desenvolvido utilizando <strong>Node.js</strong> com <strong>Express</strong> e <strong>TypeScript</strong>, 
    fornecendo APIs RESTful para a interação com o banco de dados <strong>MongoDB Atlas</strong>.
</p>

<h2>🚀 Funcionalidades</h2>
<ul>
    <li>Criação de <strong>categorias</strong> de receitas e despesas.</li>
    <li>Registro de <strong>transações</strong> associadas a categorias.</li>
    <li>Filtros por período para consulta de receitas e despesas.</li>
    <li>APIs para cálculos de <strong>saldo, receitas e gastos</strong>.</li>
</ul>

<h2>🛠️ Tecnologias Utilizadas</h2>
<ul>
    <li><strong>Node.js:</strong> Ambiente de execução JavaScript no servidor.</li>
    <li><strong>Express:</strong> Framework minimalista para construção de APIs.</li>
    <li><strong>TypeScript:</strong> Superset do JavaScript para maior segurança e organização do código.</li>
    <li><strong>MongoDB Atlas:</strong> Banco de dados não relacional na nuvem.</li>
    <li><strong>Mongoose:</strong> ODM para modelagem de dados no MongoDB.</li>
</ul>

<h2>⚙️ Pré-requisitos</h2>
<p>Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:</p>
<ul>
    <li><a href="https://nodejs.org/">Node.js</a> (versão 18 ou superior)</li>
    <li><a href="https://www.npmjs.com/">npm</a> ou <a href="https://yarnpkg.com/">yarn</a></li>
    <li>Conta no <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a> para acesso ao banco de dados.</li>
</ul>

<h2>🚀 Rodando o Backend Localmente</h2>
<ol>
    <li>
        <strong>Clone o repositório</strong>
        <pre>
git clone https://github.com/pablomartinsti/devbills-api.git
cd devbills-api
        </pre>
    </li>
    <li>
        <strong>Instale as dependências</strong>
        <pre>npm install</pre>
    </li>
    <li>
        <strong>Configure o ambiente</strong>
        <p>Crie um arquivo <code>.env</code> na raiz do projeto e adicione as seguintes variáveis:</p>
        <pre>
MONGO_URI=SuaURLDoMongoDBAtlas
PORT=3000
        </pre>
    </li>
    <li>
        <strong>Inicie o servidor</strong>
        <pre>npm run dev</pre>
        <p>O servidor estará rodando em: <a href="http://localhost:3000">http://localhost:3000</a>.</p>
    </li>
</ol>

<h2>🌐 Endpoints da API</h2>
<h3><strong>Categorias</strong></h3>
<ul>
    <li><strong>GET /categories</strong>: Lista todas as categorias.</li>
    <li><strong>POST /categories</strong>: Cria uma nova categoria.</li>
</ul>
<pre>
{
  "name": "Salário",
  "color": "#4CAF50"
}
</pre>

<h3><strong>Transações</strong></h3>
<ul>
    <li><strong>GET /transactions</strong>: Lista todas as transações.</li>
    <li><strong>POST /transactions</strong>: Cria uma nova transação.</li>
</ul>
<pre>
{
  "name": "Pagamento do Aluguel",
  "amount": 1500,
  "date": "2024-01-01",
  "type": "expense",
  "categoryId": "63a9f1b6f123456789abcdef"
}
</pre>

<h2>📦 Scripts Disponíveis</h2>
<ul>
    <li><strong>npm run dev</strong>: Inicia o servidor em modo de desenvolvimento.</li>
    <li><strong>npm run build</strong>: Compila o projeto para produção.</li>
    <li><strong>npm start</strong>: Inicia o servidor em modo de produção.</li>
</ul>

<h2>🌐 Deploy</h2>
<p>O backend está hospedado na <strong>Render</strong>.</p>
<p>Acesse o deploy: <a href="https://devbills-api-1.onrender.com">https://devbills-api.render.com</a></p>

<h2>🤝 Contribuição</h2>
<p>Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.</p>

<h2>📄 Licença</h2>
<p>Este projeto está sob a licença MIT. Consulte o arquivo <a href="LICENSE">LICENSE</a> para mais detalhes.</p>
