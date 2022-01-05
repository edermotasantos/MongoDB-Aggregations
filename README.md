# 🗂 MongoDB Aggregations

<!-- 
![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)
-->
<div> 
  <a href="https://www.linkedin.com/in/eder-santos-78114521a/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  <!--  <a href = "mailto:3derms@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a> -->
  <a href = "mailto:eder.mota@outlook.com"><img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" target="_blank"></a> 
</div>

Esse foi o último projeto proposto pela Trybe focado em MongoDB e tem como objetivo colocar em prática os métodos e operadores para executar operações de agregação de dados. Também deve ser utilizados vários datasets, possibilitando praticar em vários cenários os operadores e estágios do aggregation pipeline. Os dados são do IMDB sobre registros de empresas áereas e registros de deslocamentos de pessoas com bicicletas. Para isso é necessário que cumpra os seguintes requisitos:
- Filtrar filme através de uma `pipeline`, primeiro não especificando os campos que serão exibidos, logo após especificando os campos, depois ordenando de acordo com especificações
- Criar um novo campo e retornar documentos que contém esse novo campo
- Retornar campo que está em determinada posição respeitando condições especificadas
- Calcular media de determinados campos
- Determinar o maior ou/e menor valor

<!-- <img src="exemplo-image.png" alt="exemplo imagem"> -->

## 🗂 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* você deve possuir o Visual Studio Code ou outro editor de código instalado
* você deve possuir o MongoDB instalado em sua máquina
 
## 🗂 Instalando MongoDB Aggregations

Para instalar o MongoDB-Aggregations, siga estas etapas:

Linux:

* Faça o clone do projeto: 
`git clone git@github.com:edermotasantos/MongoDB-Aggregations.git`
* Entre na página através do comando:
`cd MongoDB-Aggregations`
* Dentro da pasta instale as dependências:
`npm install`

## 🗂 Usando MongoDB-Aggregations

Para usar MongoDB Aggregations, siga estas etapas:
* Ao abrir o terminal conecte a sua instância local do MongoDB caso não funcione tente reinstalar
* Caso já esteja no ar, digite `exit` para conseguir executar as importações dos dados em seu terminal
* Antes de restaurar a base de dados o progresso deve ser salva na pasta e com o nome correto
* Para cada teste você terá que restaurar a base de dados, para isso digite o comando no diretório raiz `DBNAME=aggregations ./scripts/resetdb.sh assets`
* Para testar todos os requisitos digite `./scripts/evaluate.sh`
* Para testar um requisito específico digite `./scripts/evaluate.sh desafioN`

Agora você já pode começar a desenvolver o seu projeto!

## 🗂 Referências:
<a href="https://github.com/iuricode/readme-template/blob/main/README-repository/iuricode.md">iuricode</a>

<a href="https://github.com/arthur-hc/Project-Cookmaster/edit/main/README.md">arthur-hc</a>
