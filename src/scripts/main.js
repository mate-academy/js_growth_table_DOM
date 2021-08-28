'use strict';

const tbody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.onclick = () => {
  if (tbody.querySelectorAll('tr').length < 10) {
    tbody.append(tbody.lastElementChild.cloneNode(true));
    removeRow.disabled = false;
  };

  if (tbody.querySelectorAll('tr').length === 10) {
    appendRow.disabled = true;
  }
};

removeRow.onclick = () => {
  if (tbody.querySelectorAll('tr').length > 2) {
    tbody.lastElementChild.remove();
    appendRow.disabled = false;
  }

  if (tbody.querySelectorAll('tr').length === 2) {
    removeRow.disabled = true;
  }
};

appendColumn.onclick = () => {
  [ ...tbody.querySelectorAll('tr') ].forEach(tr => {
    if (tr.querySelectorAll('td').length < 10) {
      tr.append(tr.lastElementChild.cloneNode(true));
    }
    removeColumn.disabled = false;
  });

  if ([ ...tbody.querySelectorAll('tr') ][0].querySelectorAll('td')
    .length === 10) {
    appendColumn.disabled = true;
  }
};

removeColumn.onclick = () => {
  [ ...tbody.querySelectorAll('tr') ].forEach(tr => {
    if (tr.querySelectorAll('td').length > 2) {
      tr.lastElementChild.remove();
    }
    appendColumn.disabled = false;
  });

  if ([ ...tbody.querySelectorAll('tr') ][0].querySelectorAll('td')
    .length === 2) {
    removeColumn.disabled = true;
  }
};
