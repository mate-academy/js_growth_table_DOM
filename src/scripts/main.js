'use strict';

document.querySelector('.container').addEventListener('click', (e) => {
  const target = e.target;

  if (e.target.tagName !== 'BUTTON') {
    return;
  }

  const checkCounter = (amount, contrTarget) => {
    if (amount === 2 || amount === 10) {
      target.setAttribute('disabled', true);
    } else {
      target.removeAttribute('disabled');
      contrTarget.removeAttribute('disabled');
    }
  };

  const container = e.currentTarget;
  const table = container.querySelector('.field');
  const tableBody = container.querySelector('tbody');
  const tableRows = table.querySelectorAll('tr');
  const appendRow = container.querySelector('.append-row');
  const removeRow = container.querySelector('.remove-row');
  const appendColumn = container.querySelector('.append-column');
  const removeColumn = container.querySelector('.remove-column');

  if (target.matches('.append-row')) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      const fragment = document.createElement('td');

      newRow.append(fragment);
    }
    tableBody.append(newRow);
    checkCounter(table.rows.length, removeRow);
  }

  if (target.matches('.remove-row')) {
    tableBody.deleteRow(-1);
    checkCounter(table.rows.length, appendRow);
  }

  if (target.matches('.append-column')) {
    tableRows.forEach((row) => {
      const newTd = document.createElement('td');

      row.append(newTd);
    });
    checkCounter(table.rows[0].cells.length, removeColumn);
  }

  if (target.matches('.remove-column')) {
    tableRows.forEach((row) => {
      row.lastElementChild.remove();
    });
    checkCounter(table.rows[0].cells.length, appendColumn);
  }
});
