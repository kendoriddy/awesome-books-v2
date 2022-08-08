import { showBooks } from "./modules/show.js";
import { handlePageChange } from "./modules/page.js";

const books = JSON.parse(localStorage.getItem('books'));
if (books !== null) {
  books.forEach((book) => {
    showBooks(book.title, book.author, book.id);
  });
}

const nav = document.querySelectorAll(".nav-link");
nav.forEach((el) => {
  el.addEventListener("click", (e) => {
    handlePageChange(e);
  });
});
