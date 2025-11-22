// Featured books array with image paths
const featuredBooks = [
  {
    title: 'Grays Anatomy for Students',
    author: 'Richard L. Drake, A. Wayne Vogl, Adam W. M. Mitchell',
    desc: 'Gray’s Anatomy for Students is a modern, student-friendly anatomy textbook designed to make complex anatomical concepts easier to understand. It explains the human body using clear language, detailed illustrations, and clinical examples that show how anatomy connects to real medical situations. The book is widely used by medical, nursing, and health-science students because of its structured layout, helpful diagrams, and step-by-step explanations.',
    img: 'assets/imges/book1.png'
  },
  {
    title: 'Cracking The Coding Interview',
    author: 'Gayle Laakmann McDowel',
    desc: '"Cracking the Coding Interview" is one of the most well-known guides for preparing for software engineering interviews. The book includes detailed explanations of common programming problems, data structures, algorithms, and real interview-style challenges. It teaches readers how to analyze problems, write efficient code, and understand what interviewers look for in candidates. It also includes insider tips about the hiring process from the author’s experience at Google, Apple, and Microsoft.',
    img: 'assets/imges/book2.png'
  },
  {
    title: 'Principles of Marketing ',
    author: 'Philip Kotler & Gary Armstrong',
    desc: 'A complete introduction to marketing: consumer behavior, branding, pricing, communication strategies, and digital marketing.',
    img: 'assets/imges/book 7.jpg'
  },
  {
    title: 'Human Anatomy & Physiology ',
    author: 'Elaine N. Marieb ',
    desc: 'A widely used textbook that explains the body’s systems with diagrams, illustrations, and real-life clinical applications.',
    img: 'assets/imges/book 6.jpg'
  },
  {
    title: 'Computer Science: An Overview” (12th Edition) ',
    author: 'J. Glenn Brookshear ',
    desc: 'A clear and easy introduction to computer science topics including algorithms, data structures, operating systems, databases, AI, networking, and cybersecurity. Great for beginners.',
    img: 'assets/imges/book 5.jpg'
  }
];

function renderFeatured() {
  const row = document.getElementById('featured-row');
  row.innerHTML = '';

  featuredBooks.forEach((b, i) => {
    const col = document.createElement('div');
    col.className = 'col-md-4';

    col.innerHTML = `
      <div class="card h-100">
        <img src="${b.img}" class="card-img-top" alt="${b.title}" onerror="this.style.display='none'">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${b.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${b.author}</h6>
          <p class="card-text card-description" id="desc-${i}">${b.desc}</p>
          <button class="btn btn-sm btn-outline-primary mt-auto read-toggle" data-index="${i}">
            Read More
          </button>
        </div>
      </div>
    `;

    row.appendChild(col);
  });

  // Read More / Read Less toggle
  document.querySelectorAll('.read-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.dataset.index;
      const desc = document.getElementById('desc-' + idx);

      desc.classList.toggle('expanded');
      btn.textContent = desc.classList.contains('expanded') ? 'Read Less' : 'Read More';
    });
  });
}

document.addEventListener('DOMContentLoaded', renderFeatured);


// Search function
function search() {
  let input = document.getElementById("searchInput").value.toLowerCase();

  let items = ["math book", "science book", "history book", "english book"];

  let foundItem = items.find(item => item.toLowerCase().includes(input));

  document.getElementById("result").textContent = foundItem
    ? "Found: " + foundItem
    : "No results found.";
}

