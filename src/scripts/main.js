'use strict';

class Field {
  constructor(
    minRows,
    maxRows,
    table,
    addRow,
    removeRow,
    addColumn,
    removeColumn,
  ) {
    this.minRows = minRows;
    this.maxRows = maxRows;
    this.table = table;
    this.addRow = addRow;
    this.removeRow = removeRow;
    this.addColumn = addColumn;
    this.removeColumn = removeColumn;
  }

  init() {
    this.initAddRow();
    this.initRemoveRow();
    this.initAddColumn();
    this.initRemoveColumn();
  }

  initAddRow() {
    this.addRow.addEventListener('click', (e) => {
      const rows = this.table.getElementsByTagName('tr');
      const lastRow = rows[rows.length - 1];

      if (rows.length < this.maxRows) {
        lastRow.insertAdjacentHTML('afterend', lastRow.outerHTML);
      }

      if (rows.length === this.maxRows) {
        this.addRow.disabled = true;
      }

      this.removeRow.disabled = null;
    });
  }

  initAddColumn() {
    this.addColumn.addEventListener('click', (e) => {
      this.removeColumn.disabled = null;

      const rows = [...this.table.getElementsByTagName('tr')];

      rows.forEach((row) => {
        row.insertAdjacentHTML('beforeend', `<td></td>`);
      });

      if (rows[0].children.length === this.maxRows) {
        this.addColumn.disabled = true;

        return false;
      }
    });
  }

  initRemoveRow() {
    this.removeRow.addEventListener('click', (e) => {
      const rows = this.table.getElementsByTagName('tr');
      const lastRow = rows[rows.length - 1];

      if (rows.length > this.minRows) {
        lastRow.remove();
      }

      if (rows.length === this.minRows) {
        this.removeRow.disabled = true;
      }

      this.addRow.disabled = null;
    });
  }

  initRemoveColumn() {
    this.removeColumn.addEventListener('click', (e) => {
      this.addColumn.disabled = null;

      const rows = [...this.table.getElementsByTagName('tr')];

      rows.forEach((row) => {
        row.lastElementChild.remove();
      });

      if (rows[0].children.length === this.minRows) {
        this.removeColumn.disabled = true;

        return false;
      }
    });
  }
}

const MAX_ROWS = 10;
const MIN_ROWS = 2;
const tableEl = document.querySelector('.field');
const addRowEl = document.querySelector('.append-row');
const removeRowEl = document.querySelector('.remove-row');
const addColumnEl = document.querySelector('.append-column');
const removeColumnEl = document.querySelector('.remove-column');

const field = new Field(
  MIN_ROWS,
  MAX_ROWS,
  tableEl,
  addRowEl,
  removeRowEl,
  addColumnEl,
  removeColumnEl,
);

field.init();
