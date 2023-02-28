'use strict';

const container = document.querySelector('.container');
const tbody = document.querySelector('tbody');
let rows = [...tbody.querySelectorAll('tr')];

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const updateRows = () => {
  return [...tbody.querySelectorAll('tr')];
};

const setMaxValue = (list, appendBtn, removeBtn) => {
  const minValue = 2;
  const maxValue = 10;

  appendBtn.disabled = list.length >= maxValue;

  removeBtn.disabled = list.length === minValue;
};

container.addEventListener('click', e => {
  const newRow = tbody.children[0].cloneNode(true);

  if (e.target.tagName !== 'BUTTON') {
    return;
  }

  switch (e.target.className) {
    case 'append-row button':
      tbody.append(newRow);
      rows = updateRows();
      break;

    case 'remove-row button':
      tbody.deleteRow(rows.length - 1);
      rows = updateRows();
      break;

    case 'append-column button':
      rows.forEach(({ children }) => {
        const lastCell = children[children.length - 1];

        lastCell.after(lastCell.cloneNode(true));
      });
      break;

    case 'remove-column button':
      rows.forEach(({ children }) => {
        const penultimateCell = children[children.length - 2];

        return penultimateCell.nextElementSibling.remove();
      });
      break;

    default: return;
  }

  setMaxValue(rows, appendRowBtn, removeRowBtn);

  rows.forEach(({ children }) => {
    setMaxValue(children, appendColumnBtn, removeColumnBtn);
  });
});
