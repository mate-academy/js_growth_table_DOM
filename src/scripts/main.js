'use strict';

const container = document.querySelector('.container');
const tr = document.getElementsByTagName('tr');

container.addEventListener('click', (e) => {
  switch (e.target.className) {
    case 'append-row button':
      if (tr.length < 10) {
        tr[tr.length - 1].after(tr[tr.length - 1].cloneNode(true));
      }

      if (tr.length === 10) {
        e.target.setAttribute('disabled', true);
      }
      break;
    case 'remove-row button':
      if (tr.length > 2) {
        tr[tr.length - 1].remove();
      }

      if (tr.length === 2) {
        e.target.setAttribute('disabled', true);
      }

      break;
    case 'append-column button':
      [...tr].forEach(element => {
        const amauntTD = element.getElementsByTagName('td').length;

        if (amauntTD < 10) {
          element.lastElementChild.after(
            element.lastElementChild.cloneNode(true));
        }

        if (amauntTD === 9) {
          e.target.setAttribute('disabled', true);
        }
      });

      break;
    case 'remove-column button':
      [...tr].forEach(element => {
        const amauntTD = element.getElementsByTagName('td').length;

        if (amauntTD > 2) {
          element.lastElementChild.remove();
        }

        if (amauntTD === 3) {
          e.target.setAttribute('disabled', true);
        }
      });
      break;
  }
});
