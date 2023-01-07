'use strict';

const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const field = document.querySelector('tbody');

addRowBtn.addEventListener('click', () => {
  const clone = field.rows[0].cloneNode(true);

  field.append(clone);

  if (field.rows.length === 10) {
    addRowBtn.setAttribute('disabled', 'true');
  }

  removeRowBtn.removeAttribute('disabled');
});

removeRowBtn.addEventListener('click', () => {
  field.lastElementChild.remove();

  if (field.rows.length === 2) {
    removeRowBtn.setAttribute('disabled', 'true');
  }

  addRowBtn.removeAttribute('disabled');
});

addColumnBtn.addEventListener('click', () => {
  [...field.children].map((row) => {
    const newSquare = document.createElement('td');

    row.prepend(newSquare);
  });

  if (field.rows[0].cells.length === 10) {
    addColumnBtn.setAttribute('disabled', 'true');
  }

  removeColumnBtn.removeAttribute('disabled');
});

removeColumnBtn.addEventListener('click', () => {
  [...field.children].map((row) => {
    row.firstElementChild.remove();
  });

  if (field.rows[0].cells.length === 2) {
    removeColumnBtn.setAttribute('disabled', 'true');
  }

  addColumnBtn.removeAttribute('disabled');
});
