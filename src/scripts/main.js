'use strict';

const container = document.querySelector('.container');
const tbody = container.querySelector('tbody');
const appendRow = container.querySelector('.append-row');
const removeRow = container.querySelector('.remove-row');
const appendColumn = container.querySelector('.append-column');
const removeColumn = container.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const row = container.querySelector('tr');
  const clonedTarget = row.cloneNode(true);

  tbody.append(clonedTarget);
  isActive();
});

removeRow.addEventListener('click', () => {
  const row = container.querySelector('tr');

  row.remove();
  isActive();
});

appendColumn.addEventListener('click', () => {
  [...tbody.children].forEach(item => {
    const clonedTd = item.children[0].cloneNode(true);

    item.append(clonedTd);
  });

  isActive();
});

removeColumn.addEventListener('click', () => {
  [...tbody.children].forEach(item => {
    item.children[0].remove();
  });

  isActive();
});

function isActive() {
  appendRow.disabled = tbody.children.length > 9;
  removeRow.disabled = tbody.children.length < 3;
  appendColumn.disabled = tbody.children[0].children.length > 9;
  removeColumn.disabled = tbody.children[0].children.length < 3;
};
