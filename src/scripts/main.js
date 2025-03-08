'use strict';

const container = document.querySelector('.container');

container.addEventListener('click', addRowNColumn);

function addRowNColumn(e) {
  const table = document.querySelector('.field');
  const body = table.querySelector('tbody');
  const buttonAppRow = container.querySelector('.append-row');
  const buttonRemRow = container.querySelector('.remove-row');
  const buttonAppCol = container.querySelector('.append-column');
  const buttonRemCol = container.querySelector('.remove-column');

  if (e.target.classList.contains('append-row')) {
    const addEl = table.querySelector('tbody');
    const elem = addEl.lastElementChild;
    const clone = elem.cloneNode(true);

    body.appendChild(clone);
  }

  if (e.target.classList.contains('remove-row')) {
    const removeEl = table.querySelector('tbody');

    removeEl.removeChild(removeEl.lastElementChild);
  }

  if (e.target.classList.contains('append-column')) {
    const rows = body.querySelectorAll('tr');

    for (const row of rows) {
      const td = document.createElement('td');

      row.append(td);
    }
  }

  if (e.target.classList.contains('remove-column')) {
    const rows = body.querySelectorAll('tr');

    for (const item of rows) {
      item.removeChild(item.lastElementChild);
    }
  }

  if (body.children.length < 10) {
    if (body.children.length < 3) {
      buttonRemRow.disabled = true;
    } else {
      buttonRemRow.disabled = false;
    }

    buttonAppRow.disabled = false;
  } else {
    buttonAppRow.disabled = true;
  }

  if (body.children[0].cells.length < 10) {
    if (body.children[0].cells.length < 3) {
      buttonRemCol.disabled = true;
    } else {
      buttonRemCol.disabled = false;
    }

    buttonAppCol.disabled = false;
  } else {
    buttonAppCol.disabled = true;
  }
}
