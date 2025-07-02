'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');

const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

function updateButtons() {
  const rows = [...table.querySelectorAll('tr')];
  const columnLength = rows[0].querySelectorAll('td').length;

  if (rows.length >= 10) {
    addRowBtn.setAttribute('disabled', '');
  } else {
    addRowBtn.removeAttribute('disabled');
  }

  if (rows.length <= 2) {
    removeRowBtn.setAttribute('disabled', '');
  } else {
    removeRowBtn.removeAttribute('disabled');
  }

  if (columnLength >= 10) {
    addColumnBtn.setAttribute('disabled', '');
  } else {
    addColumnBtn.removeAttribute('disabled');
  }

  if (columnLength <= 2) {
    removeColumnBtn.setAttribute('disabled', '');
  } else {
    removeColumnBtn.removeAttribute('disabled');
  }
}

container.addEventListener('click', (evnt) => {
  const button = evnt.target.closest('.button');

  if (!button) {
    return;
  }

  const rows = [...table.querySelectorAll('tr')];
  const columnLength = rows[0].querySelectorAll('td').length;

  if (button.className.includes('append-row')) {
    if (rows.length < 10) {
      const tr = rows[rows.length - 1].cloneNode(true);

      tbody.append(tr);
    }
  }

  if (button.className.includes('remove-row')) {
    if (rows.length > 2) {
      tbody.removeChild(rows[rows.length - 1]);
    }
  }

  if (button.className.includes('append-column')) {
    if (columnLength < 10) {
      rows.forEach(row => {
        const td = document.createElement('td');

        row.appendChild(td)
      });
    }
  }

  if (button.className.includes('remove-column')) {
    if (columnLength > 2) {
      rows.forEach(row => row.lastElementChild.remove());
    }
  }

  updateButtons();
});

