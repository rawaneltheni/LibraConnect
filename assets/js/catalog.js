// Recommended books
const recommendedBooks = [
  { title: 'Sapiens', author: 'Yuval Noah Harari', cover: 'assets/imges/book 16.jpg' },
  { title: 'Grays Anatomy for Students', author: 'Richard L. Drake, A. Wayne Vogl, Adam W. M. Mitchell', cover: 'assets/imges/book1.png'},
  {  title: 'Cracking The Coding Interview', author: 'Gayle Laakmann McDowel', cover: 'assets/imges/book2.png' }  
];

const books=[
    { title: "Atomic Habits", author: "James Clear", genre: "Self-help" , image: "assets/imges/book3.png",  
      blurb:"In Atomic Habits, James Clear reveals how tiny daily choices can lead to life-changing results. Instead of relying on motivation or massive goals, he shows how to build better habits through simple systems, small improvements, and a deeper understanding of human behavior. Clear offers practical strategies to help you break bad patterns, create meaningful routines, and shape the identity you want—one small habit at a time."},
    { title: "Man's Search for Meaning", author: "Viktor Frank", genre: "Self-help", image: "assets/imges/manSearch.jpg" , 
      blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae sapien vel turpis faucibus hendrerit. Integer non dui id urna convallis laoreet. Curabitur nec enim sed massa malesuada dignissim vel vel quam. Donec at nisi at nisl ultrices pretium."},
    
    { title: "The Four Agreements", author: "Don Miguel Ruiz", genre: "Self-help" , image: "assets/imges/theFour.jpg", 
      blurb:"The Four Agreements by Don Miguel Ruiz offers a practical guide to personal freedom and happiness. Drawing on ancient Toltec wisdom, it presents four simple principles to live by: be impeccable with your word, don’t take anything personally, don’t make assumptions, and always do your best. By following these agreements, readers can reduce self-limiting beliefs, improve relationships, and transform their lives with clarity and purpose."},
    { title: "The Case of Missing Marquess", author: "Nancy Springer", genre: "Mystery", image: "assets/imges/missing-marquess.jpg" ,
      blurb:"On her 14th birthday, Enola discovers her mother has disappeared, and while fleeing her brothers and heading to London to find her, she becomes entangled in the kidnapping of a young marquess. She must evade villains and her brothers to save the marquess while also searching for her mother."},
    
    { title: "Maisie Dobbs", author: " Jacqueline Winspea", genre: "Mystery", image: "assets/imges/MaisieDobbs.jpg", 
      blurb:"Maisie Dobbs follows the story of a young woman in post–World War I London who trains to become a private investigator. Maisie uses her intelligence, intuition, and compassion to solve complex cases while confronting the lingering effects of war. This novel weaves mystery, history, and personal growth, introducing readers to a heroine who is clever, empathetic, and determined to uncover the truth."},
   
    { title: "The A.B.C. Murderst", author: "Agatha Christie", genre: "Crime", image: "assets/imges/ABC.jpg" , 
      blurb:"In The A.B.C. Murders, the brilliant detective Hercule Poirot faces a chilling case: a serial killer who strikes in alphabetical order. Each murder follows a carefully planned pattern, leaving cryptic clues that challenge Poirot’s legendary powers of deduction. As tension builds and the danger escalates, Poirot must race against time to unravel the mystery before the killer strikes again."},

    { title: "Cracking the coding interview", author: "Gayle Laakmann McDowell", genre: "Programming" , image: "assets/imges/book2.png",
      blurb:"orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae sapien vel turpis faucibus hendrerit. Integer non dui id urna convallis laoreet. Curabitur nec enim sed massa malesuada dignissim vel vel quam. Donec at nisi at nisl ultrices pretium."},
    
    { title: "Skills For Success", author: "Stella Cottrell", genre: "Study guide", image: "assets/imges/book 14.jpg",
      blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae sapien vel turpis faucibus hendrerit. Integer non dui id urna convallis laoreet. Curabitur nec enim sed massa malesuada dignissim vel vel quam. Donec at nisi at nisl ultrices pretium."},
    
    { title: "Principles of Marketing", author: "Philip Kotler", genre: "Business", image: "assets/imges/book 7.jpg" ,
      blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae sapien vel turpis faucibus hendrerit. Integer non dui id urna convallis laoreet. Curabitur nec enim sed massa malesuada dignissim vel vel quam. Donec at nisi at nisl ultrices pretium."}
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
// renderCatalog();

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
// renderButtons()


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


const slidePanel = document.getElementById("slidePanel");
const overlay = document.getElementById("overlay");

// Elements inside the panel
const panelImage = document.getElementById("panelImage");
const panelTitle = document.getElementById("panelTitle");
const panelAuthor = document.getElementById("panelAuthor");
const panelGenre = document.getElementById("panelGenre");
const panelIntro = document.getElementById("panelIntro");

// Open panel when book card is clicked
/*.closest(selector) is a DOM method that goes up 
the DOM tree from the clicked element to find 
the nearest ancestor that matches the selector.*/
document.addEventListener("click", (e) => {
  const card = e.target.closest(".book-card");//the click is only fired if its the card it self or its childern
  if (!card) return;//If i click anywhere else but the card it woudn't work

  // const index = card.dataset.index;
  // const book = books[index];

  // Fill panel with book info
  panelImage.src = book.image;
  panelTitle.textContent = book.title;
  panelAuthor.textContent = "Author: " + book.author;
  panelGenre.textContent = "Genre: " + book.genre;
  panelIntro.textContent = book.blurb; // Add intro to your data

  // Show panel
  slidePanel.classList.add("open");
  overlay.classList.add("show");
});

// Close the panel
document.getElementById("closePanel").onclick = () => {
  slidePanel.classList.remove("open");
  overlay.classList.remove("show");
};

// Close when clicking background
overlay.onclick = () => {
  slidePanel.classList.remove("open");
  overlay.classList.remove("show");
};


document.addEventListener('includesLoaded', () => {
  const searchInput = document.getElementById("searchBox");
  const bookCards = document.querySelectorAll(".book-card"); // all book cards

  //addEventListener() takes 3 parameters — but you mostly use the first two.
  // the event, the callback function, the options 
  searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase(); // get input and lowercase

    bookCards.forEach(card => {
      const title = card.querySelector("h5").textContent.toLowerCase(); // get book title
      if (title.includes(query)) {
        card.style.display = ""; // show card
      } else {
        card.style.display = "none"; // hide card
      }
    });
  });

})

renderCatalog();
renderButtons()