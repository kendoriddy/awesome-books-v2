//  Error Message
function errorMsg(message) {
    document.querySelector('.warning').textContent = message;
    setTimeout(() => {
      document.querySelector('.warning').textContent = '';
    }, 2000);
  }