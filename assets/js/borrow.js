/* ================================================
   RECOMMENDED BOOKS (same style as catalog page)
================================================ */

const recommendedBooks = [
  { title: 'Grays Anatomy for Students', author: 'Richard L. Drake, A. Wayne Vogl, Adam W. M. Mitchell', cover: 'assets/imges/book1.png' },
  { title: 'Cracking The Coding Interview', author: 'Gayle Laakmann McDowel', cover: 'assets/imges/book2.png' },
  { title: 'Sapiens', author: 'Yuval Noah Harari', cover: 'assets/imges/book 16.jpg' },
  {title: "Atomic Habits",author: "James Clear",cover: "assets/imges/book3.png"},
  { title: 'The Midnight Library', author: 'Matt Haig', cover: 'assets/imges/book 17.jpg' }
];


/* ================================================
   BORROW BOOKS
================================================ */

const borrowBooks = [
  { title: 'Data Science for Beginners', author: 'Andrew Park', cover: 'assets/imges/book 10.jpg' },
  { title: 'Principles of Marketing', author: 'Philip Kotler', cover: 'assets/imges/book 7.jpg' },
  { title: 'Computer Science: An Overview', author: 'J. Glenn Brookshear', cover: 'assets/imges/book 5.jpg' },
  { title: 'Chemistry: The Central Science', author: 'Brown, LeMay, Bursten', cover: 'assets/imges/book 12.jpg' },
  { title: 'Introduction to Accounting', author: 'Peter Scott', cover: 'assets/imges/book 13.jpg' },
  { title: 'Study Skills for Success', author: 'Stella Cottrell', cover: 'assets/imges/book 14.jpg' },
  { title: 'Psychology: Themes and Variations', author: 'Wayne Weiten', cover: 'assets/imges/book 8.jpg' },
  { title: 'Business Essentials', author: 'Ronald J. Ebert', cover: 'assets/imges/book 9.jpg' },
  { title: 'Modern Biology', author: 'Holt McDougal', cover: 'assets/imges/book 11.jpg' },
  { title: 'Human Anatomy & Physiology', author: 'Elaine N. Marieb', cover: 'assets/imges/book 6.jpg' }
];


/* ================================================
   Render Recommended Section (Catalog-style)
================================================ */

function renderRecommended() {
  const container = document.getElementById('recommended-books');
  container.innerHTML = "";

  recommendedBooks.forEach((b) => {
    const card = document.createElement('div');
    card.className = 'borrow-card';

    card.innerHTML = `
      <div class="borrow-rec-card catalog-grid-card">
        <div class="book-card-inner">
          <div class="book-cover">
            <img src="${b.cover}" alt="${b.title}">
          </div>
          <div class="book-title">${b.title}</div>
          <div class="book-author">${b.author}</div>

          <div class="form-check mt-2">
            <input class="form-check-input borrow-checkbox" type="checkbox" value="${b.title}">
            <label class="form-check-label">Borrow this book</label>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}


/* ================================================
   Render Borrow List (Horizontal Cards)
================================================ */

function renderBorrowList() {
  const strip = document.getElementById('borrow-list');
  strip.innerHTML = "";

  borrowBooks.forEach((b, index) => {
    const card = document.createElement('div');
    card.className = "borrow-card";

    card.innerHTML = `
      <div class="borrow-card-inner">
        <div class="borrow-cover">
          <img src="${b.cover}" alt="${b.title}">
        </div>

        <div class="borrow-card-title">${b.title}</div>
        <div class="borrow-card-author">${b.author}</div>

        <div class="form-check borrow-select">
          <input class="form-check-input borrow-checkbox" type="checkbox" value="${b.title}" id="borrow-${index}">
          <label class="form-check-label" for="borrow-${index}">Select</label>
        </div>
      </div>
    `;
    strip.appendChild(card);
  });
}


/* ================================================
   Message Handling
================================================ */

function updateSelectionMessage() {
  const selected = Array.from(document.querySelectorAll('.borrow-checkbox:checked'))
    .map(ch => ch.value);

  const msg = document.getElementById('selection-msg');

  if (selected.length > 0) {
    msg.style.display = 'block';
    msg.className = 'alert alert-success mt-3';
    msg.textContent = `You selected: ${selected.join(', ')}`;
  } else {
    msg.style.display = 'none';
  }
}


/* ================================================
   Borrow Button
================================================ */

function setupBorrowButton() {
  const borrowBtn = document.getElementById('borrow-btn');
  const msg = document.getElementById('selection-msg');

  borrowBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const selectedBooks = Array.from(document.querySelectorAll('.borrow-checkbox:checked'))
      .map(ch => ch.value);

    if (selectedBooks.length === 0) {
      msg.style.display = 'block';
      msg.className = 'alert alert-warning mt-3';
      msg.textContent = 'Please select at least one book.';
      return;
    }

    msg.style.display = 'block';
    msg.className = 'alert alert-success mt-3';
    msg.textContent = `You have successfully borrowed: ${selectedBooks.join(', ')}`;

    // Reset selections
    document.querySelectorAll('.borrow-checkbox:checked').forEach(ch => ch.checked = false);
  });
}


/* ================================================
   EVENT LISTENERS
================================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderRecommended();
  renderBorrowList();
  setupBorrowButton();

  // Update message on any checkbox change
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('borrow-checkbox')) {
      updateSelectionMessage();
    }
  });
});

