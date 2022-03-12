
const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];


    // EXERCICIO 2 
    // Adicione o código do exercício aqui:
  const expectedResult = [ {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];
  
// EXERCICIO 1 
// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
  function formatedBookNames() {
   return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
  }
  console.log(formatedBookNames())

  // EXERCICIO 2 
  // 2 - Construa um array de objetos a partir do array de livros.
  function nameAndAge() {
    return books
      .map((book) => (
        {
          author: book.author.name,
          age: book.releaseYear - book.author.birthYear,
        }
      ))
      .sort((obj1, obj2) => obj1.age - obj2.age);
  }

  console.log(nameAndAge())

  //Exercicio 3
  // 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
  function fantasyOrScienceFiction() {
    return books.filter((book) => (
      book.genre === 'Fantasia' || book.genre === 'Ficção Científica'
    ));
  }

  console.log(fantasyOrScienceFiction())


// EXERCICIO 4 
// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
function oldBooksOrdered() {
  const currentYear = new Date().getFullYear();
  return books.filter((book) => (
    book.releaseYear < currentYear - 60
  )).sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
}

console.log(oldBooksOrdered())