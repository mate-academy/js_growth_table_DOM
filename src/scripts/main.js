'use strict';

const container = document.querySelector('.container');
const tableField = container.querySelector('.field');
const tbody = tableField.querySelector('tbody');

const buttonAppendColumn = container.querySelector('.append-column');
const buttonAppendRow = container.querySelector('.append-row');
const buttonRemoveColumn = container.querySelector('.remove-column');
const buttonRemoveRow = container.querySelector('.remove-row');

container.addEventListener('click', (e) => {
  const target = e.target;
  const tr = tableField.querySelectorAll('tr');

  if (!target.classList.contains('button')) {
    return null;
  }

  if (target.classList.contains('append-column')) {
    for (const elem of tr) {
      const td = document.createElement('td');

      if (elem.children.length === 10) {
        break;
      }

      elem.append(td);
    }

    if (tr[0].children.length === 10) {
      buttonAppendColumn.disabled = true;
    }

    buttonRemoveColumn.disabled = false;
  }

  if (target.classList.contains('remove-column')) {
    for (const elem of tr) {
      elem.lastElementChild.remove();
    }

    if (tr[0].cells.length < 3) {
      buttonRemoveColumn.disabled = true;
    }

    buttonAppendColumn.disabled = false;
  }

  if (target.classList.contains('append-row')) {
    const clone = tbody.firstElementChild.cloneNode(true);

    if (tbody.rows.length === 10) {
      return;
    }

    tbody.append(clone);

    if (tbody.rows.length === 10) {
      buttonAppendRow.disabled = true;
    }

    buttonRemoveRow.disabled = false;
  }

  if (target.classList.contains('remove-row')) {
    tbody.lastElementChild.remove();

    if (tbody.rows.length < 3) {
      buttonRemoveRow.disabled = true;
    }

    buttonAppendRow.disabled = false;
  }
});
