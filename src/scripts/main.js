'use strict';

const table = document.querySelector('.field');
const butAppendRow = document.querySelector('.append-row');
const butRemoveRow = document.querySelector('.remove-row');
const butAppendColumn = document.querySelector('.append-column');
const butRemoveColumn = document.querySelector('.remove-column');
const MAX_ROW = 10;
const MIN_ROW = 2;

butAppendRow.addEventListener('click', () => {

    butRemoveRow.removeAttribute('disabled');
    let len = table.querySelectorAll('tr').length;

    if (len === MAX_ROW - 1) {
        butAppendRow.setAttribute('disabled', true);
    } else {
        butAppendRow.removeAttribute('disabled');
    }

    let columns = table.rows[0].querySelectorAll('td');

    let newRow = table.insertRow(len);
    for (let i = 0; i < columns.length; i++) {

        newRow.insertAdjacentHTML('beforeend', '<td></td>');

    }
});

butRemoveRow.addEventListener('click', () => {

    butAppendRow.removeAttribute('disabled');
    let len = table.querySelectorAll('tr').length;
    if (len === MIN_ROW + 1) {
        butRemoveRow.setAttribute('disabled', true);
    } else {
        butRemoveRow.removeAttribute('disabled');
    }
    table.deleteRow(len - 1);
});

butAppendColumn.addEventListener('click', () => {
    butRemoveColumn.removeAttribute('disabled');
    let columns = table.rows[0].querySelectorAll('td');

    if (columns.length === MAX_ROW - 1) {
        butAppendColumn.setAttribute('disabled', true);
    } else {
        butAppendColumn.removeAttribute('disabled');
    }

    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].insertAdjacentHTML('beforeend', '<td></td>');
    }
});

butRemoveColumn.addEventListener('click', () => {
    butAppendColumn.removeAttribute('disabled');
    let columns = table.rows[0].querySelectorAll('td');

    if (columns.length === MIN_ROW + 1) {
        butRemoveColumn.setAttribute('disabled', true);
    } else {
        butRemoveColumn.removeAttribute('disabled');
    }
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(columns.length - 1);
    }
});
