// Recommended books
const recommendedBooks = [
  { title: 'Sapiens', author: 'Yuval Noah Harari', cover: 'assets/imges/book 16.jpg' },
  { title: 'Grays Anatomy for Students', author: 'Richard L. Drake, A. Wayne Vogl, Adam W. M. Mitchell', cover: 'assets/imges/book1.png'},
  {  title: 'Cracking The Coding Interview', author: 'Gayle Laakmann McDowel', cover: 'assets/imges/book2.png' }  
];

const books=[
    { title: "Atomic Habits", author: "James Clear", genre: "Self-help" , image: "assets/imges/book3.png"},   
    { title: "Man's Search for Meaning", author: "Viktor Frank", genre: "Self-help", image: "assets/imges/manSearch.jpg" },
    { title: "The Four Agreements", author: "Don Miguel Ruiz", genre: "Self-help" , image: "assets/imges/theFour.jpg"},
    { title: "The Case of Missing Marquess", author: "Nancy Springer", genre: "Mystery", image: "assets/imges/missing-marquess.jpg" },
    { title: "Maisie Dobbs", author: " Jacqueline Winspea", genre: "Mystery", image: "assets/imges/MaisieDobbs.jpg" },
    { title: "The A.B.C. Murderst", author: "Agatha Christie", genre: "Crime", image: "assets/imges/ABC.jpg" },
    { title: "Cracking the coding interview", author: "Gayle Laakmann McDowell", genre: "Programming" , image: "assets/imges/book2.png"},
    { title: "Skills For Success", author: "Stella Cottrell", genre: "Study guide", image: "assets/imges/book 14.jpg"},
    { title: "The Hobbit", author: "Philip Kotler", genre: "Business", image: "assets/imges/book 7.jpg" }
]

const category = [
  {cate: "All"},
  {cate: "Self-help"},
  {cate: "Programming"},
  {cate: "Business"},
  {cate:"Crime"},
  {cate: "Fiction"},  
  {cate: "Mystery"},
  {cate: "history"}
]

const booksGenre = document.getElementById("genre-btns")
const catalog = document.getElementById("catalog")  

function renderCatalog(){
 catalog.innerHTML= "";
 books.forEach((book,index) => {
  const card = `
  <div class="col-md-4 mb-3 book-card" data-index="${index}">
    <div class="card">
      <div class="card-body">
        <img src="${book.image}" class="card-img-top" alt="${book.title}">
        <h5>${book.title}</h5>
        <p>${book.author}</p>        
        <p>${book.genre}</p>
      </div>
    </div>
  </div>`;
  catalog.innerHTML += card;
 })
}
renderCatalog();

// Render recommended books as Bootstrap cards
function renderRecommended() {
  const container = document.getElementById('recommended-books');
  container.innerHTML = '';
  recommendedBooks.forEach((b) => {
    const card = document.createElement('div');
    card.className = 'col';
    card.innerHTML = `
      <div class="card h-100">
        <img src="${b.cover}" class="card-img-top" alt="${b.title}" style="height:200px; object-fit:cover;">
        <div class="card-body">
          <h5 class="card-title">${b.title}</h5>
          <p class="card-text">${b.author}</p>          
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}
renderRecommended()

function renderButtons(){
  booksGenre.innerHTML="";
  category.forEach((g) => {
    const genre = `
    <button class="genre-btn" data-cat="${g.cate}">${g.cate}</button>`;
    booksGenre.innerHTML += genre;
  });
  // Add click events after buttons are created
  const buttons = document.querySelectorAll(".genre-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.cat;
      filterBooks(selected);
    });
  });
};
renderButtons()


function filterBooks(category) {
  let filtered;

  if (category === "All") {
    filtered = books;
  } else {
    filtered = books.filter(b => b.genre === category);
  }

  renderBooks(filtered);
}

function renderBooks(list) {
  catalog.innerHTML = "";
  list.forEach((book, index) => {
    const html = `
       <div class="col-md-4 mb-3 book-card" data-index="${index}">
        <div class="card">
          <div class="card-body">
            <img src="${book.image}" class="card-img-top" alt="${book.title}">
            <h5>${book.title}</h5>
            <p>${book.author}</p>        
            <p>${book.genre}</p>
          </div>
        </div>
      </div>`;
    catalog.innerHTML += html;
  });
}