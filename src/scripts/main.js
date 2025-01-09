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

const maxRowColumn = 10;
const minRowClumn = 2;
const addDisabledMax = 9;
const addDisabledMin = 3;

function onAppendHandler() {
  if (refs.tbody.children.length === maxRowColumn) {
    return;
  }

  if (refs.tbody.children.length >= minRowClumn) {
    refs.removeRow.removeAttribute('disabled');
  }

  if (refs.tbody.children.length >= addDisabledMax) {
    refs.appendRow.setAttribute('disabled', true);
  }

  const newRow = document.createElement('tr');

  for (let i = 0; i < refs.tbody.children[0].children.length; i++) {
    newRow.append(document.createElement('td'));
  }

  refs.tbody.append(newRow);
}

function onRemoveHandler() {
  if (refs.tbody.children.length <= addDisabledMin) {
    refs.removeRow.setAttribute('disabled', true);
  }

  if (refs.tbody.children.length <= maxRowColumn) {
    refs.appendRow.removeAttribute('disabled');
  }

  refs.tbody.lastElementChild.remove();
}

function onAppendColHandler() {
  refreshRefs();

  refs.trArr.forEach((row) => {
    if (row.children.length === maxRowColumn) {
      return;
    }

    if (row.children.length >= addDisabledMax) {
      refs.appendColumn.setAttribute('disabled', true);
    }

    if (row.children.length >= minRowClumn) {
      refs.removeColumn.removeAttribute('disabled');
    }

    const newCeil1 = document.createElement('td');

    row.appendChild(newCeil1);
  });
}

function onRemoveColHandler() {
  refs.trArr.forEach((el) => {
    if (el.children.length <= addDisabledMin) {
      refs.removeColumn.setAttribute('disabled', true);
    }

    if (el.children.length <= maxRowColumn) {
      refs.appendColumn.removeAttribute('disabled');
    }
    el.lastElementChild.remove();
  });
}
