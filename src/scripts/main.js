'use strict';

const tbody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', e => {
  if (tbody.children.length === 2) {
    removeRow.removeAttribute('disabled');
  }

  if (tbody.children.length < 10) {
    const item = document.querySelector('tbody tr');
    const newRow = document.createElement('tr');

    for (let i = 0; i < item.children.length; i++) {
      newRow.append(document.createElement('td'));
    }

    tbody.append(newRow);
  }

  if (tbody.children.length === 10) {
    appendRow.setAttribute('disabled', 'disabled');
  }
});

appendColumn.addEventListener('click', e => {
  const trs = document.querySelectorAll('tbody tr');

  trs.forEach(element => {
    if (element.children.length === 2) {
      removeColumn.removeAttribute('disabled');
    }

    if (element.children.length < 10) {
      element.insertAdjacentHTML('beforeend', `<td></td>`);
    }

    if (element.children.length === 10) {
      appendColumn.setAttribute('disabled', 'disabled');
    }
  });
});

removeRow.addEventListener('click', e => {
  if (tbody.children.length === 10) {
    appendRow.removeAttribute('disabled');
  }

  if (tbody.children.length > 2) {
    tbody.lastElementChild.remove();
  }

  if (tbody.children.length === 2) {
    removeRow.setAttribute('disabled', 'disabled');
  }
});

removeColumn.addEventListener('click', e => {
  const trs = document.querySelectorAll('tbody tr');

  trs.forEach(element => {
    if (element.children.length === 10) {
      appendColumn.removeAttribute('disabled');
    }

    if (element.children.length > 2) {
      element.lastElementChild.remove();
    }

    if (element.children.length === 2) {
      removeColumn.setAttribute('disabled', 'disabled');
    }
  });
});
