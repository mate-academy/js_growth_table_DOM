'use strict';

const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const field = document.querySelector('tbody');

addRowBtn.addEventListener('click', () => {
  if (field.rows.length === 10) {
    return;
  }

  const clone = field.rows[0].cloneNode(true);

  field.append(clone);
});

removeRowBtn.addEventListener('click', () => {
  if (field.rows.length === 2) {
    return;
  }
  field.lastChild.remove();
});

addColumnBtn.addEventListener('click', () => {
  if (field.firstChild.cells.length === 10) {
    return;
  }

  [...field.children].map((row) => {
    const newSquare = document.createElement('td');

    row.prepend(newSquare);
  });
});

removeColumnBtn.addEventListener('click', () => {
  if (field.firstChild.cells.length === 2) {
    return;
  }

  [...field.children].map((row) => {
    row.firstChild.remove();
  });
});
