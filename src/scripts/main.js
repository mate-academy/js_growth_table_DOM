'use strict';

const container = document.querySelector('.container');
const tr = document.getElementsByTagName('tr');

container.addEventListener('click', (e) => {
  const maxCell = 10;
  const minCell = 2;

  switch (e.target.className) {
    case 'append-row button':
      if (tr.length < maxCell) {
        tr[tr.length - 1].after(tr[tr.length - 1].cloneNode(true));
      }

      if (tr.length === maxCell) {
        e.target.setAttribute('disabled', true);
      }
      break;
    case 'remove-row button':
      if (tr.length > minCell) {
        tr[tr.length - 1].remove();
      }

      if (tr.length === minCell) {
        e.target.setAttribute('disabled', true);
      }

      break;
    case 'append-column button':
      [...tr].forEach(element => {
        const amauntTD = element.getElementsByTagName('td').length;

        if (amauntTD < maxCell) {
          element.lastElementChild.after(
            element.lastElementChild.cloneNode(true));
        }

        if (amauntTD === maxCell - 1) {
          e.target.setAttribute('disabled', true);
        }
      });

      break;
    case 'remove-column button':
      [...tr].forEach(element => {
        const amauntTD = element.getElementsByTagName('td').length;

        if (amauntTD > minCell) {
          element.lastElementChild.remove();
        }

        if (amauntTD === minCell + 1) {
          e.target.setAttribute('disabled', true);
        }
      });
      break;
  }
});
