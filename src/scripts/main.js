'use strict';

const buttons = document.querySelectorAll('button');
const table = document.querySelector('tbody');

for (const button of buttons) {
  button.addEventListener('click', () => {
    if (button.classList.contains('append-row')) {
      if (table.children.length >= 10) {
        return;
      }

      if (table.children.length === 9) {
        button.setAttribute('disabled', '');
      } else if (table.children.length === 2) {
        buttons[1].removeAttribute('disabled');
      }

      const newRow = document.createElement('tr');

      for (let i = 0; i < table.children[0].children.length; i++) {
        const newCell = document.createElement('td');

        newRow.append(newCell);
      }

      table.append(newRow);
    }

    if (button.classList.contains('remove-row')) {
      if (table.children.length === 10) {
        buttons[0].removeAttribute('disabled');
      } else if (table.children.length === 3) {
        button.setAttribute('disabled', '');
      }

      table.lastElementChild.remove();
    }

    if (button.classList.contains('append-column')) {
      if (table.children[0].children.length >= 10) {
        return;
      }

      if (table.children[0].children.length === 9) {
        button.setAttribute('disabled', '');
      } else if (table.children[0].children.length === 2) {
        buttons[3].removeAttribute('disabled');
      }

      for (const row of table.children) {
        const newCell = document.createElement('td');

        row.append(newCell);
      }
    }

    if (button.classList.contains('remove-column')) {
      if (table.children[0].children.length === 3) {
        button.setAttribute('disabled', '');
      } else if (table.children[0].children.length === 10) {
        buttons[2].removeAttribute('disabled');
      }

      for (const row of table.children) {
        row.lastElementChild.remove();
      }
    }
  });
}
