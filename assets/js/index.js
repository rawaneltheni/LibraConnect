// Featured books array (you can change titles, authors, images)
const featuredBooks = [
  {
    title: "Gray's Anatomy for Students",
    author: "Richard L. Drake · A. Wayne Vogl · Adam W. M. Mitchell",
    img: "assets/imges/book1.png",
    desc: "A modern anatomy textbook designed for medical students, combining clear illustrations with concise clinical explanations to help you understand the human body in an organized, exam-friendly way."
  },
  {
    title: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
    img: "assets/imges/book2.png",
    desc: "A classic guide to technical interviews, packed with data structure and algorithm problems, tips on how interviewers think, and strategies to communicate your reasoning clearly during coding interviews."
  },
  {
    title: "Principles of Marketing",
    author: "Philip Kotler · Gary Armstrong",
    img: "assets/imges/book3.png",
    desc: "An introduction to core marketing concepts such as customer value, segmentation, branding, and digital marketing, illustrated with practical examples and real-world case studies."
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    img: "assets/imges/manSearch.jpg",
    desc: "Psychiatrist Viktor Frankl reflects on his experiences in Nazi concentration camps and explains logotherapy, arguing that the primary human drive is the search for meaning in life."
  },
  {
    title: "The Four",
    author: "Scott Galloway",
    img: "assets/imges/theFour.jpg",
    desc: "A deep dive into how Amazon, Apple, Facebook, and Google built empires that shape our daily lives, and what their power means for consumers, competitors, and careers."
  },
  {
    title: "Maisie Dobbs",
    author: "Jacqueline Winspear",
    img: "assets/imges/MaisieDobbs.jpg",
    desc: "The first novel in a historical mystery series featuring Maisie Dobbs, a psychologist and investigator in post–World War I England, blending mystery, drama, and emotional depth."
  },
  {
    title: "The Missing Marquess",
    author: "Nancy Springer",
    img: "assets/imges/missing-marquess.jpg",
    desc: "A fun, fast-paced mystery that follows Enola Holmes, the brilliant younger sister of Sherlock Holmes, as she solves her first case and searches for her missing mother."
  }
];

// Render slides + wire up read-more and Swiper
function renderFeatured() {
  const wrapper = document.getElementById("featured-swiper-wrapper");
  if (!wrapper) return;

  wrapper.innerHTML = featuredBooks
    .map((book, index) => {
      return `
        <div class="swiper-slide">
          <article class="book-cards">
            <div class="book-cards-cover">
              <img src="${book.img}" alt="${book.title}">
            </div>
            <div class="book-cards-body">
              <h3 class="book-title">${book.title}</h3>
              <p class="book-author">${book.author}</p>
              <p class="card-description" id="desc-${index}">
                ${book.desc}
              </p>
              <button class="read-toggle" type="button" data-index="${index}">
                Read More
              </button>
            </div>
          </article>
        </div>
      `;
    })
    .join("");

  // Read-more toggle
  const buttons = wrapper.querySelectorAll(".read-toggle");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = btn.dataset.index;
      const desc = document.getElementById("desc-" + idx);
      if (!desc) return;

      desc.classList.toggle("expanded");
      btn.textContent = desc.classList.contains("expanded")
        ? "Read Less"
        : "Read More";
    });
  });

  // Initialize Swiper with 3D coverflow effect
  new Swiper(".featured-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 180,
      modifier: 2,
      slideShadows: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1
      },
      576: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: "auto"
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", renderFeatured);
