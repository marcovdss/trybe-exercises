<h1>Parte I - Criação de arquivos e diretórios </h1>


<b>Dica</b> : Para criação de arquivos vazios você pode utilizar o comando <code class="inline">touch nome-do-arquivo.extensao</code>

<ol>
  <li>
    <div class="pt-1 pb-1">
      Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado 
<code class="inline">unix_tests</code>       e navegue até ele.
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Crie um arquivo de texto com o nome 
<code class="inline">trybe.txt</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Crie uma cópia do arquivo 
<code class="inline">trybe.txt</code>       com nome 
<code class="inline">trybe_backup.txt</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Renomeie o arquivo 
<code class="inline">trybe.txt</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Dentro de 
<code class="inline">unix_tests</code>      , crie um novo diretório chamado 
<code class="inline">backup</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Mova o arquivo 
<code class="inline">trybe_backup.txt</code>       para o diretório 
<code class="inline">backup</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Dentro de 
<code class="inline">unix_tests</code>      , crie um novo diretório chamado 
<code class="inline">backup2</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Mova o arquivo 
<code class="inline">trybe_backup.txt</code>       da pasta 
<code class="inline">backup</code>       para a pasta 
<code class="inline">backup2</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Apague a pasta 
<code class="inline">backup</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Renomeie a pasta 
<code class="inline">backup2</code>       para 
<code class="inline">backup</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Apague o diretório 
<code class="inline">backup</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Limpe o terminal.
    </div>
  </li>
</ol>
<div class="pt-1 pb-1">
    
  <strong>
    Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado 
<code class="inline">skills.txt</code>    :
  </strong>
</div>
<div class="block-code"><pre class="language-sh" tabindex="0"><code class="language-sh"><span class="token output">Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL</span></code></pre></div>
<ol start="14">
  <li>
    <div class="pt-1 pb-1">
      Mostre na tela as 5 primeiras skills do arquivo 
<code class="inline">skills.txt</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Mostre na tela as 4 últimas skills do arquivo 
<code class="inline">skills.txt</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Apague todos os arquivos que terminem em 
<code class="inline">.txt</code>      .
    </div>
  </li>
</ol>
--------------------------------------------------------------------------------
<div class=" col-span-12 content-section-box"><h3 id="parte-ii-manipulacao-and-busca" class="title-section">
  Parte II - Manipulação &amp; Busca
</h3>
<ol>
  <li>
    Na pasta 
<code class="inline">unix_tests</code>    , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando 
    <a class="external-link" href="https://linux.die.net/man/1/curl" target="_blank" rel="noopener noreferrer">
      curl:
    </a>
  </li>
</ol>
<div class="block-code"><button class="copy-code-button" type="button">Copiar</button><pre class="language-sh" tabindex="0"><code class="language-sh">
<span class="token output">curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"</span></code></pre></div>
<ol start="2">
  <li>
    <div class="pt-1 pb-1">
      Mostre todo o conteúdo do arquivo 
<code class="inline">countries.txt</code>       na tela.
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Mostre o conteúdo de 
<code class="inline">countries.txt</code>      , página por página, até encontrar a 
<code class="inline">Zambia</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Mostre novamente o conteúdo de 
<code class="inline">countries.txt</code>       página por página, mas agora utilize um comando para buscar por 
<code class="inline">Zambia</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Busque por 
<code class="inline">Brazil</code>       no 
<code class="inline">countries.txt</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Busque novamente por 
<code class="inline">brazil</code>      , mas agora utilizando o 
      <em>
        lower case
      </em>
      .
    </div>
    <div class="pt-1 pb-1">
       <br>
       <b>
        Para os próximos exercícios, crie um novo arquivo chamado 
<code class="inline">phrases.txt</code>         e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.
      </b> <br>
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Busque pelas frases que não contenham a palavra 
<code class="inline">fox</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Conte o número de palavras do arquivo 
<code class="inline">phrases.txt</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Conte o número de linhas do arquivo 
<code class="inline">phrases.txt</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Crie os arquivos 
<code class="inline">empty.tbt</code>       e 
<code class="inline">empty.pdf</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Liste todos os arquivos do diretório 
<code class="inline">unix_tests</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Liste todos os arquivos que terminem com 
<code class="inline">txt</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Liste todos os arquivos que terminem com 
<code class="inline">tbt</code>       ou 
<code class="inline">txt</code>      .
    </div>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Acesse o manual do comando 
<code class="inline">ls</code>      .
    </div>
  </li>
</ol>
