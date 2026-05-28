'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const field = document.querySelector('.field>tbody');

const maxLimit = 10;
const minLimit = 2;

const dimensions = [4, 4];

function appendRow() {
  dimensions[1]++;

  const tr = document.createElement('tr');

  for (let i = 0; i < dimensions[0]; i++) {
    tr.appendChild(document.createElement('td'));
  }
  field.appendChild(tr);

  manageButtons();
}

function removeRow() {
  dimensions[1]--;
  field.removeChild(field.lastElementChild);
  manageButtons();
}

function appendColumn() {
  dimensions[0]++;

  [...field.children].forEach((child) => {
    child.appendChild(document.createElement('td'));
  });

  manageButtons();
}

function removeColumn() {
  dimensions[0]--;

  [...field.children].forEach((child) => {
    child.removeChild(child.lastElementChild);
  });

  manageButtons();
}

function manageButtons() {
  const actions = [
    [appendRowBtn, appendRow, dimensions[1] < maxLimit],
    [removeRowBtn, removeRow, dimensions[1] > minLimit],
    [appendColumnBtn, appendColumn, dimensions[0] < maxLimit],
    [removeColumnBtn, removeColumn, dimensions[0] > minLimit],
  ];

  actions.forEach(([btn, handler, enabled]) => {
    btn.disabled = !enabled;
    btn.removeEventListener('click', handler);

    if (enabled) {
      btn.addEventListener('click', handler);
    }
  });
}
