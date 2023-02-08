'use strict';

const appendRow = document.querySelector('.append-row');

appendRow.addEventListener('click', () => {
  const tbody = document.querySelector('tbody');

  if (tbody.children.length < 10) {
    const firstTr = document.querySelector('tr');
    const newTr = document.createElement('tr');

    for (let i = 0; i < firstTr.children.length; i++) {
      const newTd = document.createElement('td');

      newTr.append(newTd);
    }

    tbody.append(newTr);
  }

  if (tbody.children.length >= 10) {
    appendRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }
});

const removeRow = document.querySelector('.remove-row');

removeRow.addEventListener('click', () => {
  const tbody = document.querySelector('tbody');

  if (tbody.children.length > 2) {
    tbody.lastElementChild.remove();
  }

  if (tbody.children.length <= 2) {
    removeRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }
});

const appendColum = document.querySelector('.append-column');

appendColum.addEventListener('click', () => {
  const tr = document.querySelector('tr');

  if (tr.children.length < 10) {
    const firstTr = document.querySelectorAll('tr');

    for (const el of firstTr) {
      const item = document.createElement('td');

      el.append(item);
    }
  }

  if (tr.children.length >= 10) {
    appendColum.disabled = true;
  } else {
    removeColum.disabled = false;
  }
});

const removeColum = document.querySelector('.remove-column');

removeColum.addEventListener('click', () => {
  const tr = document.querySelector('tr');

  if (tr.children.length > 2) {
    const firstTr = document.querySelectorAll('tr');

    for (const el of firstTr) {
      el.lastElementChild.remove();
    }
  }

  if (tr.children.length <= 2) {
    removeColum.disabled = true;
  } else {
    appendColum.disabled = false;
  }
});
