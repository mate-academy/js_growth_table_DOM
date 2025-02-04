'use strict';

const tbody = document.querySelector('tbody');
const buttons = [...document.querySelectorAll('.button')];

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    if (e.target.matches('.append-row')) {
      if (tbody.childElementCount === 10) {
        return;
      }

      const newrow = document.createElement('tr');

      tbody.append(newrow);

      for (
        let i = 0;
        i < newrow.previousElementSibling.childElementCount;
        i++
      ) {
        const tableCell = document.createElement('td');

        newrow.append(tableCell);
      }

      if (tbody.childElementCount === 10) {
        e.target.setAttribute('disabled', '');
      }

      if (tbody.childElementCount > 2) {
        e.target.nextElementSibling.removeAttribute('disabled');
      }
    }

    if (e.target.matches('.remove-row')) {
      tbody.lastElementChild.remove();

      if (tbody.childElementCount < 10) {
        e.target.previousElementSibling.removeAttribute('disabled');
      }

      if (tbody.childElementCount === 2) {
        e.target.setAttribute('disabled', '');
      }
    }

    const rows = [...tbody.querySelectorAll('tr')];

    rows.forEach((row) => {
      if (e.target.matches('.append-column')) {
        if (row.childElementCount === 10) {
          return;
        }

        const cell = document.createElement('td');

        row.append(cell);

        if (row.childElementCount === 10) {
          e.target.setAttribute('disabled', '');

          return;
        }

        if (row.childElementCount > 2) {
          e.target.nextElementSibling.removeAttribute('disabled');
        }
      }

      if (e.target.matches('.remove-column')) {
        row.lastElementChild.remove();

        if (row.childElementCount < 10) {
          e.target.previousElementSibling.removeAttribute('disabled');
        }

        if (row.childElementCount === 2) {
          e.target.setAttribute('disabled', '');
        }
      }
    });
  });
});
