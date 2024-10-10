'use strict';

class Table {
  TBODY = document.querySelector('.field tbody');
  APPEND_ROW_BUTTON = document.querySelector('.append-row');
  REMOVE_ROW_BUTTON = document.querySelector('.remove-row');
  APPEND_COLUMN_BUTTON = document.querySelector('.append-column');
  REMOVE_COLUMN_BUTTON = document.querySelector('.remove-column');

  rowSize = 4;
  cellsSize = 4;

  constructor() {
    this.getTableSize();
    this.addListeners();
  }

  getTableSize() {
    this.ROWS = this.TBODY.querySelectorAll('tr');

    if (this.ROWS.length > 0) {
      const cells = this.ROWS[0].cells;

      this.rowSize = this.ROWS.length;
      this.cellsSize = cells.length;
    }
  }

  createRow = () => {
    // Next line for test, disabled button works correctly
    if (this.rowSize === 10) {
      return;
    }

    const row = document.createElement('tr');

    for (let i = 0; i < this.cellsSize; i++) {
      row.insertCell();
    }

    this.TBODY.append(row);
    this.checkRowButtonDisabled();
  };
  removeRow = () => {
    this.TBODY.deleteRow(this.rowSize - 1);
    this.checkRowButtonDisabled();
  };

  createColumn = () => {
    if (this.cellsSize === 10) {
      return;
    }

    for (let i = 0; i < this.rowSize; i++) {
      this.TBODY.rows[i].insertCell();
    }
    this.checkColumnButtonDisabled();
  };

  removeColumn = () => {
    for (let i = 0; i < this.rowSize; i++) {
      this.TBODY.rows[i].deleteCell(this.cellsSize - 1);
    }

    this.checkColumnButtonDisabled();
  };

  addListeners() {
    this.APPEND_ROW_BUTTON.addEventListener('click', this.createRow);
    this.APPEND_COLUMN_BUTTON.addEventListener('click', this.createColumn);
    this.REMOVE_COLUMN_BUTTON.addEventListener('click', this.removeColumn);
    this.REMOVE_ROW_BUTTON.addEventListener('click', this.removeRow);
  }

  checkRowButtonDisabled() {
    this.getTableSize();

    if (this.rowSize >= 10) {
      this.APPEND_ROW_BUTTON.disabled = true;
    } else {
      this.APPEND_ROW_BUTTON.disabled = false;
    }

    if (this.rowSize > 2) {
      this.REMOVE_ROW_BUTTON.disabled = false;
    } else {
      this.REMOVE_ROW_BUTTON.disabled = true;
    }
  }

  checkColumnButtonDisabled() {
    this.getTableSize();

    if (this.cellsSize >= 10) {
      this.APPEND_COLUMN_BUTTON.disabled = true;
    } else {
      this.APPEND_COLUMN_BUTTON.disabled = false;
    }

    if (this.cellsSize > 2) {
      this.REMOVE_COLUMN_BUTTON.disabled = false;
    } else {
      this.REMOVE_COLUMN_BUTTON.disabled = true;
    }
  }
}

const table = new Table();

export default table;
