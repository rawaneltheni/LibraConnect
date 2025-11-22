// Recommended books
const recommendedBooks = [
  { title: 'Sapiens', author: 'Yuval Noah Harari', cover: 'assets/imges/book 16.jpg' },
  { title: 'Grays Anatomy for Students', author: 'Richard L. Drake, A. Wayne Vogl, Adam W. M. Mitchell', cover: 'assets/imges/book1.png'},
  {  title: 'Cracking The Coding Interview', author: 'Gayle Laakmann McDowel', cover: 'assets/imges/book2.png' },
  { title: 'The Midnight Library', author: 'Matt Haig', cover: 'assets/imges/book 17.jpg' }
];

// 10 Study / Academic Books with covers
const borrowBooks = [
  { title: 'Computer Science: An Overview', author: 'J. Glenn Brookshear', cover: 'assets/imges/book 5.jpg' },
  { title: 'Human Anatomy & Physiology', author: 'Elaine N. Marieb', cover: 'assets/imges/book 6.jpg' },
    { title: 'Principles of Marketing', author: 'Philip Kotler', cover: 'assets/imges/book 7.jpg' },
  { title: 'Psychology: Themes and Variations', author: 'Wayne Weiten', cover: 'assets/imges/book 8.jpg' },
  { title: 'Business Essentials', author: 'Ronald J. Ebert', cover: 'assets/imges/book 9.jpg' },
  { title: 'Data Science for Beginners', author: 'Andrew Park', cover: 'assets/imges/book 10.jpg' },
  { title: 'Modern Biology', author: 'Holt McDougal', cover: 'assets/imges/book 11.jpg' },
  { title: 'Chemistry: The Central Science', author: 'Brown, LeMay, Bursten', cover: 'assets/imges/book 12.jpg' },
  { title: 'Introduction to Accounting', author: 'Peter Scott', cover: 'assets/imges/book 13.jpg' },
  { title: 'Study Skills for Success', author: 'Stella Cottrell', cover: 'assets/imges/book 14.jpg' }
];


// Render borrow list with checkboxes and covers
function renderBorrowList() {
  const list = document.getElementById('borrow-list');
  list.innerHTML = '';
  borrowBooks.forEach((b) => {
    const item = document.createElement('label');
    item.className = 'list-group-item d-flex align-items-center';
    item.innerHTML = `
      <input class="form-check-input me-2 borrow-checkbox" type="checkbox" value="${b.title}">
      <img src="${b.cover}" alt="${b.title}" style="height:50px;width:auto;margin-right:10px;">
      <div>
        <strong>${b.title}</strong> — ${b.author}
      </div>
    `;
    list.appendChild(item);
  });
}

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
          <div class="form-check">
            <input class="form-check-input borrow-checkbox" type="checkbox" value="${b.title}" id="rec-${b.title}">
            <label class="form-check-label" for="rec-${b.title}">Borrow this book</label>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderBorrowList();
  renderRecommended();

  const msg = document.getElementById('selection-msg');
  const borrowBtn = document.getElementById('borrow-btn');

  // Update selection message dynamically
  function updateSelectionMessage() {
    const selected = Array.from(document.querySelectorAll('.borrow-checkbox:checked'))
      .map(ch => ch.value);

    if (selected.length > 0) {
      msg.style.display = 'block';
      msg.className = 'alert alert-success';
      msg.textContent = `You selected: ${selected.join(', ')}`;
    } else {
      msg.style.display = 'none';
    }
  }

  // Handle dynamic selection
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('borrow-checkbox')) {
      updateSelectionMessage();
    }
  });

  // Borrow Button click
  borrowBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedBooks = Array.from(document.querySelectorAll('.borrow-checkbox:checked'))
      .map(ch => ch.value);

    if (selectedBooks.length > 0) {
      msg.style.display = 'block';
      msg.className = 'alert alert-success';
      msg.textContent = `You have successfully borrowed: ${selectedBooks.join(', ')}`;

      // Clear selections after borrowing
      document.querySelectorAll('.borrow-checkbox:checked').forEach(ch => ch.checked = false);
    } else {
      msg.style.display = 'block';
      msg.className = 'alert alert-warning';
      msg.textContent = 'Please select at least one book to borrow.';
    }
  });
});
// Search function
function search() {
  let input = document.getElementById("searchInput").value.toLowerCase();

  let items = ["math book", "science book", "history book", "english book"];

  let foundItem = items.find(item => item.toLowerCase().includes(input));

  document.getElementById("result").textContent = foundItem
    ? "Found: " + foundItem
    : "No results found.";
}