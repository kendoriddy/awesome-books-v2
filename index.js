import { DateTime } from './modules/luxon.js';
import { showBooks } from './modules/show.js';
import { handlePageChange } from './modules/page.js';

const books = JSON.parse(localStorage.getItem('books'));
if (books !== null) {
  books.forEach((book) => {
    showBooks(book.title, book.author, book.id);
  });
}

const nav = document.querySelectorAll('.nav-link');
nav.forEach((el) => {
  el.addEventListener('click', (e) => {
    handlePageChange(e);
  });
});

class DateTimeLuxon {
  constructor() {
    this.dt = '';
    this.options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  }

  getTime() {
    this.dt += DateTime.now().setLocale('en-US')
      .toLocaleString(this.options)
      .split(',')
      .splice(1);
    this.dt += ', ';
    this.dt += DateTime.now().setLocale('en-US').toLocaleString(DateTime.TIME_WITH_SECONDS);
    return this.dt;
  }
}

setInterval(() => {
  const getClock = document.querySelector('.date');
  const timeStr = new DateTimeLuxon().getTime();
  getClock.textContent = timeStr;
}, 1000);
