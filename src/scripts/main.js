'use strict';

const tbody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', e => {
  const value = tbody.children.length;

  if (value === 2) {
    removeRow.removeAttribute('disabled');
  }

  if (value < 10) {
    const item = document.querySelector('tbody tr');
    const newRow = document.createElement('tr');

    for (let i = 0; i < item.children.length; i++) {
      newRow.append(document.createElement('td'));
    }

    tbody.append(newRow);
  }

  if (value === 9) {
    appendRow.setAttribute('disabled', 'disabled');
  }
});

appendColumn.addEventListener('click', e => {
  const trs = document.querySelectorAll('tbody tr');

  trs.forEach(element => {
    const value = element.children.length;

    if (value === 2) {
      removeColumn.removeAttribute('disabled');
    }

    if (value === 9) {
      appendColumn.setAttribute('disabled', 'disabled');
    }

    if (value < 10) {
      element.insertAdjacentHTML('beforeend', `<td></td>`);
    }
  });
});

removeRow.addEventListener('click', e => {
  const value = tbody.children.length;
  if (value === 3) {
    removeRow.setAttribute('disabled', 'disabled');
  }

  if (value === 10) {
    appendRow.removeAttribute('disabled');
  }

  if (value > 2) {
    tbody.lastElementChild.remove();
  }

});

removeColumn.addEventListener('click', e => {
  const trs = document.querySelectorAll('tbody tr');

  trs.forEach(element => {
    const value = element.children.length;

    if (value === 10) {
      appendColumn.removeAttribute('disabled');
    }

    if (value > 2) {
      element.lastElementChild.remove();
    }

    if (value === 3) {
      removeColumn.setAttribute('disabled', 'disabled');
    }
  });
});
