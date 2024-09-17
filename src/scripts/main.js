'use strict';

const MAX_COUNT = 10;
const MIN_COUNT = 2;

const tbody = document.querySelector('.field > tbody');
const tr = tbody.querySelector('tr');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const updateButtonState = () => {
  appendRow.disabled = tbody.childElementCount >= MAX_COUNT;
  removeRow.disabled = tbody.childElementCount <= MIN_COUNT;
  appendColumn.disabled = tr.childElementCount >= MAX_COUNT;
  removeColumn.disabled = tr.childElementCount <= MIN_COUNT;
};

appendRow.addEventListener('click', () => {
  if (tbody.childElementCount < MAX_COUNT) {
    tbody.innerHTML += `<tr></tr>`;
  }

  updateButtonState();
});

removeRow.addEventListener('click', () => {
  if (tbody.childElementCount > MIN_COUNT) {
    const delRow = tbody.querySelector('tr');

    delRow.remove();
  }

  updateButtonState();
});

appendColumn.addEventListener('click', () => {
  if (tr.childElementCount < MAX_COUNT) {
    const tRowAllForAdd = tbody.querySelectorAll('tr');
    const td = document.createElement('td');

    tRowAllForAdd.forEach((el) => {
      el.innerHTML += td.outerHTML;
    });
  }

  updateButtonState();
});

removeColumn.addEventListener('click', () => {
  if (tr.childElementCount > MIN_COUNT) {
    const tRowAllForDel = tbody.querySelectorAll('tr');

    tRowAllForDel.forEach((el) => {
      el.lastElementChild.remove();
    });
  }

  updateButtonState();
});
