'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field tbody');
const appendRowBtn = document.querySelector('.append-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeRowBtn = document.querySelector('.remove-row');
const removeColumnBtn = document.querySelector('.remove-column');

function appendRow() {
  if (table.rows.length === 10) {
    return;
  }
  removeRowBtn.disabled = false;

  const row = document.createElement('tr');

  for (let i = 0; i < table.rows[length].children.length; i++) {
    row.innerHTML += '<td></td>';
  }
  table.append(row);

  appendRowBtn.disabled = table.rows.length === 10;
}

function appendColumn() {
  if (table.rows[length].children.length === 10) {
    return;
  }
  removeColumnBtn.disabled = false;

  for (const row of table.rows) {
    row.innerHTML += '<td></td>';
  }
  appendColumnBtn.disabled = table.rows[length].children.length === 10;
}

function removeRow() {
  appendRowBtn.disabled = false;
  table.lastElementChild.remove();
  removeRowBtn.disabled = table.rows.length === 2;
}

function removeColumn() {
  appendColumnBtn.disabled = false;

  for (const row of table.rows) {
    row.lastElementChild.remove();
  }
  removeColumnBtn.disabled = table.rows[length].children.length === 2;
}

container.addEventListener('click', (e) => {
  const button = e.target.classList;

  if (button.contains('append-row')) {
    appendRow();
  }

  if (button.contains('append-column')) {
    appendColumn();
  }

  if (button.contains('remove-row')) {
    removeRow();
  }

  if (button.contains('remove-column')) {
    removeColumn();
  }
});
