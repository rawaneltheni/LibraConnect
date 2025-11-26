// Recommended books
const recommendedBooks = [
  { title: "Grays Anatomy for Students", author: "Richard L. Drake, A. Wayne Vogl, Adam W. M. Mitchell", cover: "assets/imges/book1.png" },
  { title: "Cracking The Coding Interview", author: "Gayle Laakmann McDowel", cover: "assets/imges/book2.png" },
  { title: "Sapiens", author: "Yuval Noah Harari", cover: "assets/imges/book 16.jpg" },
];

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    image: "assets/imges/book3.png",
    blurb:
      "In Atomic Habits, James Clear reveals how tiny daily choices can lead to life-changing results. Instead of relying on motivation or massive goals, he shows how to build better habits through simple systems, small improvements, and a deeper understanding of human behavior.",
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor Frank",
    genre: "Self-help",
    image: "assets/imges/manSearch.jpg",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae sapien vel turpis faucibus hendrerit. Integer non dui id urna convallis laoreet.",
  },
  {
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    genre: "Self-help",
    image: "assets/imges/theFour.jpg",
    blurb:
      "The Four Agreements presents four simple principles to live by: be impeccable with your word, don’t take anything personally, don’t make assumptions, and always do your best.",
  },
  {
    title: "The Case of Missing Marquess",
    author: "Nancy Springer",
    genre: "Mystery",
    image: "assets/imges/missing-marquess.jpg",
    blurb:
      "On her 14th birthday, Enola discovers her mother has disappeared and becomes entangled in the kidnapping of a young marquess while searching for her.",
  },
  {
    title: "Maisie Dobbs",
    author: "Jacqueline Winspea",
    genre: "Mystery",
    image: "assets/imges/MaisieDobbs.jpg",
    blurb:
      "Maisie Dobbs follows a young woman in post–World War I London who becomes a private investigator, confronting the lingering effects of war.",
  },
  {
    title: "The A.B.C. Murders",
    author: "Agatha Christie",
    genre: "Crime",
    image: "assets/imges/ABC.jpg",
    blurb:
      "Hercule Poirot faces a serial killer who strikes in alphabetical order, leaving cryptic clues that challenge his legendary deduction.",
  },
  {
    title: "Cracking the coding interview",
    author: "Gayle Laakmann McDowell",
    genre: "Programming",
    image: "assets/imges/book2.png",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae sapien vel turpis faucibus hendrerit.",
  },
  {
    title: "Skills For Success",
    author: "Stella Cottrell",
    genre: "Study guide",
    image: "assets/imges/book 14.jpg",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae sapien vel turpis faucibus hendrerit.",
  },
  {
    title: "Principles of Marketing",
    author: "Philip Kotler",
    genre: "Business",
    image: "assets/imges/book 7.jpg",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae sapien vel turpis faucibus hendrerit.",
  },
];

const category = [
  { cate: "All" },
  { cate: "Self-help" },
  { cate: "Programming" },
  { cate: "Business" },
  { cate: "Crime" },
  { cate: "Fiction" },
  { cate: "Mystery" },
  { cate: "Study guide" },
];

const booksGenre = document.getElementById("genre-btns");
const catalog = document.getElementById("catalog");

// ------------- RENDER HELPERS -------------

function renderCatalog() {
  renderBooks(books);
}

// card for grid section
function gridCardHTML(book) {
  return `
    <div class="col catalog-grid-card">
      <article class="book-card" data-title="${book.title}">
        <div class="book-card-inner">
          <div class="book-cover">
            <img src="${book.image}" alt="${book.title}">
          </div>
          <div class="book-title">${book.title}</div>
          <div class="book-author">${book.author}</div>
          <div style="font-size:0.7rem;color:var(--color-text-muted);margin-top:0.1rem;">
            ${book.genre}
          </div>
        </div>
      </article>
    </div>`;
}

function renderBooks(list) {
  catalog.innerHTML = "";
  list.forEach((book) => {
    catalog.innerHTML += gridCardHTML(book);
  });
}

// Recommended strip cards
function renderRecommended() {
  const container = document.getElementById("recommended-books");
  container.innerHTML = "";
  recommendedBooks.forEach((b) => {
    const div = document.createElement("div");
    div.className = "book-card";
    div.dataset.title = b.title;
    div.innerHTML = `
      <div class="book-card-inner">
        <div class="book-cover">
          <img src="${b.cover}" alt="${b.title}">
        </div>
        <div class="book-title">${b.title}</div>
        <div class="book-author">${b.author}</div>
      </div>
    `;
    container.appendChild(div);
  });
}

function renderButtons() {
  booksGenre.innerHTML = "";
  category.forEach((g, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "genre-btn" + (index === 0 ? " active" : "");
    btn.dataset.cat = g.cate;
    btn.textContent = g.cate;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".genre-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterBooks(g.cate);
    });
    booksGenre.appendChild(btn);
  });
}

// ------------- FILTERING -------------

function filterBooks(categoryName) {
  let filtered;

  if (categoryName === "All") {
    filtered = books;
  } else {
    filtered = books.filter((b) => b.genre === categoryName);
  }

  renderBooks(filtered);
}

// ------------- SLIDE PANEL -------------

const slidePanel = document.getElementById("slidePanel");
const overlay = document.getElementById("overlay");

const panelImage = document.getElementById("panelImage");
const panelTitle = document.getElementById("panelTitle");
const panelAuthor = document.getElementById("panelAuthor");
const panelGenre = document.getElementById("panelGenre");
const panelIntro = document.getElementById("panelIntro");

function openPanelForBook(book) {
  panelImage.src = book.image || "";
  panelTitle.textContent = book.title;
  panelAuthor.textContent = "Author: " + book.author;
  panelGenre.textContent = "Genre: " + book.genre;
  panelIntro.textContent = book.blurb;

  slidePanel.classList.add("open");
  overlay.classList.add("show");
}

// event delegation for ALL book cards
document.addEventListener("click", (e) => {
  const card = e.target.closest(".book-card");
  if (!card) return;

  const title = card.dataset.title;
  const book = books.find((b) => b.title === title);
  if (!book) return;

  openPanelForBook(book);
});

// Close panel
document.getElementById("closePanel").onclick = () => {
  slidePanel.classList.remove("open");
  overlay.classList.remove("show");
};

overlay.onclick = () => {
  slidePanel.classList.remove("open");
  overlay.classList.remove("show");
};

// ------------- SEARCH (top input) -------------

document.addEventListener('includesLoaded', () => {
  const searchInput = document.getElementById("searchBox");
  const bookCards = document.querySelectorAll(".book-card"); // all book cards

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

// ------------- INITIAL RENDER -------------

renderRecommended();
renderCatalog();
renderButtons();