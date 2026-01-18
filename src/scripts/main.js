'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.querySelector('tbody');

  if (!tbody) {
    return;
  }

  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  function cloneRow() {
    const lastRow = tbody.lastElementChild;

    tbody.append(lastRow.cloneNode(true));
  }

  function removeRow() {
    if (tbody.children.length > 1) {
      tbody.lastElementChild.remove();
    }
  }

  function cloneColumn() {
    tbody.querySelectorAll('tr').forEach((tr) => {
      const lastCell = tr.lastElementChild;

      tr.append(lastCell.cloneNode(true));
    });
  }

  function removeColumn() {
    tbody.querySelectorAll('tr').forEach((tr) => {
      if (tr.children.length > 1) {
        tr.lastElementChild.remove();
      }
    });
  }

  function updateButtons() {
    const rowCount = tbody.querySelectorAll('tr').length;
    const colCount = tbody.querySelector('tr').children.length;

    appendRowBtn.disabled = rowCount >= 10;
    removeRowBtn.disabled = rowCount <= 2;

    appendColumnBtn.disabled = colCount >= 10;
    removeColumnBtn.disabled = colCount <= 2;
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('.append-row')) {
      cloneRow();
      updateButtons();
    }

    if (e.target.closest('.remove-row')) {
      removeRow();
      updateButtons();
    }

    if (e.target.closest('.append-column')) {
      cloneColumn();
      updateButtons();
    }

    if (e.target.closest('.remove-column')) {
      removeColumn();
      updateButtons();
    }
  });

  updateButtons();
});
