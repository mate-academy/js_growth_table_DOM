'use strict';

const maxCount = 10;
const minCount = 2;
const buttons = [
  [...document.querySelectorAll('button')].splice(0, 2),
  [...document.querySelectorAll('button')].splice(2, 3),
];
const table = document.querySelector('.field');
const cells = [table.rows.length, table.rows[0].cells.length];

buttons[0].forEach((item) => {
  item.addEventListener('click', (e) => {
    switch (e.target.textContent) {
      case '+':
        const newRow = document.createElement('tr');

        cells[0]++;

        if (cells[0] === maxCount) {
          buttons[0][0].disabled = true;
        }

        buttons[0][1].disabled = false;

        for (let i = 0; i < cells[1]; i++) {
          newRow.appendChild(document.createElement('td'));
        }

        table.appendChild(newRow);
        break;

      case '-':
        cells[0]--;

        if (cells[0] === minCount) {
          buttons[0][1].disabled = true;
        }

        buttons[0][0].disabled = false;

        table.rows[table.rows.length - 1].remove();
    }
  });
});

buttons[1].forEach((item) => {
  item.addEventListener('click', (e) => {
    switch (e.target.textContent) {
      case '+':
        cells[1]++;

        if (cells[1] === maxCount) {
          buttons[1][0].disabled = true;
        }

        buttons[1][1].disabled = false;

        for (let i = 0; i < table.rows.length; i++) {
          table.rows[i].appendChild(document.createElement('td'));
        }
        break;

      case '-':
        cells[1]--;

        if (cells[1] === minCount) {
          buttons[1][1].disabled = true;
        }

        buttons[1][0].disabled = false;

        for (let i = 0; i < table.rows.length; i++) {
          table.rows[i].cells[table.rows[i].cells.length - 1].remove();
        }
    }
  });
});
