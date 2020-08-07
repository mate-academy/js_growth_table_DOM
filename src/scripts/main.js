'use strict';

const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const minLengthBt = 2;
const maxLengthBt = 10;

appendRowBtn.addEventListener('click', (ev) => {
  if (table.rows.length < maxLengthBt) {
    removeRowBtn.disabled = false;

    const trNew = table.rows[0].cloneNode(true);

    table.append(trNew);
  }

  if (table.rows.length === maxLengthBt) {
    ev.target.setAttribute('disabled', true);
    ev.target.disabled = true;
  } else {
    removeRowBtn.disabled = false;
  }
});

removeRowBtn.addEventListener('click', ev => {
  if (table.rows.length > minLengthBt) {
    table.rows[table.rows.length - 1].remove();
  }

  if (table.rows.length === minLengthBt) {
    ev.target.disabled = true;
  } else {
    appendRowBtn.disabled = false;
  }
});

appendColumnBtn.addEventListener('click', event => {
  const columnnTable = table.rows[0].cells;

  if (columnnTable.length < maxLengthBt) {
    for (const tr of table.rows) {
      const itemTable = tr.cells[0];

      tr.append(itemTable.cloneNode(true));
    }
  }

  if (columnnTable.length === maxLengthBt) {
    appendColumnBtn.disabled = true;
  } else {
    removeColumnBtn.disabled = false;
  }
});

removeColumnBtn.addEventListener('click', event => {
  const columnnTable = table.rows[0].cells;

  if (columnnTable.length > minLengthBt) {
    for (const tr of table.rows) {
      const itemTable = tr.cells[0];

      itemTable.remove();
    }
  }

  if (columnnTable.length === minLengthBt) {
    removeColumnBtn.disabled = true;
  } else {
    appendColumnBtn.disabled = false;
  }
});
