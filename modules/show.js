// Display books
export const showBooks = (title, author, id) => {
    const bookList = document.querySelector('.book-list');
    const items = document.createElement('li');
    items.innerHTML = `
        <div class="item-list"><h3><q>${title}</q> by ${author}</h3></div>
        `;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    items.append(removeBtn);
    bookList.appendChild(items);
  
    removeBtn.addEventListener('click', () => {
      const book = new Book(title, author, id);
      id = removeBtn.id;
      book.remove();
      items.remove();
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = Math.floor(Math.random() * 100);
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
  
      const book = new Book(title, author, id);
      book.addBook();
      if (title && author) {
        showBooks(book.title, book.author, book.id);
      }
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    });
  });