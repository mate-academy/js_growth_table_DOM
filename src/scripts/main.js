'use strict';

const container = document.querySelector('.container');
const field = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = {
  rows: 4,
  columns: 4,
};

container.addEventListener('click', clickEvent => {
  const target = clickEvent.target;
  const rows = document.querySelectorAll('tr');

  switch (true) {
    case target.classList.contains('append-row'): {
      table.rows++;

      const row = document.createElement('tr');

      row.innerHTML = createTd(table.columns);

      field.firstElementChild.appendChild(row);
      break;
    }

    case target.classList.contains('remove-row'): {
      table.rows--;
      field.firstElementChild.lastElementChild.remove();
      break;
    }

    case target.classList.contains('append-column'): {
      table.columns++;

      rows.forEach(row => {
        const element = document.createElement('td');

        row.insertBefore(element, row.firstChild);
      });
      break;
    }

    case target.classList.contains('remove-column'): {
      table.columns--;

      rows.forEach(row => {
        row.firstElementChild.remove();
      });
      break;
    }

    default: {
      Error('Wrong class');
    }
  }

  if (table.rows === 2) {
    removeRow.setAttribute('disabled', 'true');
  } else if (table.rows === 10) {
    appendRow.setAttribute('disabled', 'true');
  } else {
    removeRow.removeAttribute('disabled');
    appendRow.removeAttribute('disabled');
  }

  if (table.columns === 2) {
    removeColumn.setAttribute('disabled', 'true');
  } else if (table.columns === 10) {
    appendColumn.setAttribute('disabled', 'true');
  } else {
    removeColumn.removeAttribute('disabled');
    appendColumn.removeAttribute('disabled');
  }
});

const createTd = (num) => {
  let elements = '';

  for (let i = 0; i < num; i++) {
    elements += '<td></td>';
  }

  return elements;
};
