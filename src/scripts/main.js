'use strict';

const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  const button = e.target.closest('.button');

  if (!button || button.disabled) {
    return;
  }

  const tbody = document.querySelector('tbody');
  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const appendColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');
  const tr = document.querySelector('tr');

  if (button.classList.contains('append-row')) {
    tbody.append(tbody.children[0].cloneNode(true));

    if (tbody.children.length >= 10) {
      appendRow.setAttribute('disabled', true);
    }

    if (tbody.children.length > 2) {
      removeRow.removeAttribute('disabled');
    }
  }

  if (button.classList.contains('remove-row')) {
    tbody.lastElementChild.remove();

    if (tbody.children.length <= 2) {
      removeRow.setAttribute('disabled', true);
    }

    if (tbody.children.length < 10) {
      appendRow.removeAttribute('disabled');
    }
  }

  if (button.classList.contains('append-column')) {
    for (const item of tbody.children) {
      const td = document.createElement('td');

      item.append(td);
    }

    if (tr.children.length >= 10) {
      appendColumn.setAttribute('disabled', true);
    }

    if (tr.children.length > 2) {
      removeColumn.removeAttribute('disabled');
    }
  }

  if (button.classList.contains('remove-column')) {
    for (const item of tbody.children) {
      item.lastElementChild.remove();
    }

    if (tr.children.length <= 2) {
      removeColumn.setAttribute('disabled', true);
    }

    if (tr.children.length < 10) {
      appendColumn.removeAttribute('disabled');
    }
  }
});
