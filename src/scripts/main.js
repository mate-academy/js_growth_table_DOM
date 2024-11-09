'use strict';

const tbody = document.querySelector('tbody');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const tr = document.querySelectorAll('tr');

    const tdCount = tr[0] ? tr[0].querySelectorAll('td').length : 0;

    if (tr.length <= 2) {
      document.querySelector('.remove-row.button').disabled = true;
    } else {
      document.querySelector('.remove-row.button').disabled = false;
    }

    if (tdCount <= 2) {
      document.querySelector('.remove-column.button').disabled = true;
    } else {
      document.querySelector('.remove-column.button').disabled = false;
    }

    if (tr.length >= 10) {
      document.querySelector('.append-row.button').disabled = true;
    } else {
      document.querySelector('.append-row.button').disabled = false;
    }

    if (tdCount >= 10) {
      document.querySelector('.append-column.button').disabled = true;
    } else {
      document.querySelector('.append-column.button').disabled = false;
    }

    if (e.target.className === 'append-row button') {
      const firstTr = tbody.querySelector('tr');

      firstTr.before(firstTr.cloneNode(true));
    }

    if (e.target.className === 'remove-row button') {
      tbody.firstElementChild.remove();
    }

    if (e.target.className === 'append-column button') {
      tr.forEach((element) => {
        const newTd = document.createElement('td');

        element.append(newTd);
      });
    }

    if (e.target.className === 'remove-column button') {
      tr.forEach((element) => {
        element.firstElementChild.remove();
      });
    }
  });
});
