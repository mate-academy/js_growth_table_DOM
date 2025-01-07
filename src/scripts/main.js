'use strict';

let refs = {};

function refreshRefs() {
  refs = {
    appendRow: document.querySelector('.append-row'),
    removeRow: document.querySelector('.remove-row'),
    appendColumn: document.querySelector('.append-column'),
    removeColumn: document.querySelector('.remove-column'),
    table: document.querySelector('.field'),
    tbody: document.querySelector('tbody'),
    trArr: document.querySelectorAll('tr'),
  };
}

refreshRefs();

refs.appendRow.addEventListener('click', onAppendHandler);
refs.removeRow.addEventListener('click', onRemoveHandler);
refs.appendColumn.addEventListener('click', onAppendColHandler);
refs.removeColumn.addEventListener('click', onRemoveColHandler);

function onAppendHandler() {
  if (refs.tbody.children.length === 10) {
    return;
  }

  if (refs.tbody.children.length >= 2) {
    refs.removeRow.removeAttribute('disabled');
  }

  if (refs.tbody.children.length >= 9) {
    refs.appendRow.setAttribute('disabled', true);
  }

  const newRow = document.createElement('tr');

  for (let i = 0; i < refs.tbody.children[0].children.length; i++) {
    newRow.append(document.createElement('td'));
  }

  refs.tbody.append(newRow);
}

function onRemoveHandler() {
  if (refs.tbody.children.length <= 3) {
    refs.removeRow.setAttribute('disabled', true);
  }

  if (refs.tbody.children.length <= 10) {
    refs.appendRow.removeAttribute('disabled');
  }

  refs.tbody.lastElementChild.remove();
}

function onAppendColHandler() {
  refreshRefs();

  refs.trArr.forEach((row, idx) => {
    if (row.children.length === 10) {
      return;
    }

    if (row.children.length >= 9) {
      refs.appendColumn.setAttribute('disabled', true);
    }

    if (row.children.length >= 2) {
      refs.removeColumn.removeAttribute('disabled');
    }

    const newCeil1 = document.createElement('td');

    row.appendChild(newCeil1);
  });
}

function onRemoveColHandler() {
  refs.trArr.forEach((el) => {
    if (el.children.length <= 3) {
      refs.removeColumn.setAttribute('disabled', true);
    }

    if (el.children.length <= 10) {
      refs.appendColumn.removeAttribute('disabled');
    }
    el.lastElementChild.remove();
  });
}
