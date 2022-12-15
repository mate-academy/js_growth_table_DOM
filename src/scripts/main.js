'use strict';

const body = document.querySelector('body');
const field = document.querySelector('.field').querySelector('tbody');

const colAppButton = document.querySelector('.append-column');
const colRemButton = document.querySelector('.remove-column');
const rowAppButton = document.querySelector('.append-row');
const rowRemButton = document.querySelector('.remove-row');

body.addEventListener('click', (e) => {
  const allRows = [...field.querySelectorAll('tr')];

  if (e.target.closest('.append-column')) {
    colRemButton.disabled = false;

    allRows.map(tr => {
      if (tr.children.length < 10) {
        const td = document.createElement('td');

        tr.append(td);

        if (tr.children.length === 10) {
          colAppButton.disabled = true;
        }
      }
    });
  }

  if (e.target.closest('.remove-column')) {
    colAppButton.disabled = false;

    allRows.map(tr => {
      if (tr.children.length > 2) {
        tr.lastElementChild.remove();

        if (tr.children.length === 2) {
          colRemButton.disabled = true;
        }
      }
    });
  }

  if (e.target.closest('.append-row')) {
    rowRemButton.disabled = false;

    if (allRows.length < 10) {
      field.append(field.firstElementChild.cloneNode(true));

      if (allRows.length === 9) {
        rowAppButton.disabled = true;
      }
    }
  }

  if (e.target.closest('.remove-row')) {
    rowAppButton.disabled = false;

    if (allRows.length > 2) {
      field.lastElementChild.remove();

      if (allRows.length === 3) {
        rowRemButton.disabled = true;
      }
    }
  }
});
