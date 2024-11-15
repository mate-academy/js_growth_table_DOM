'use strict';

class Table {
  tbody = document.querySelector('.field tbody');
  appendRowButton = document.querySelector('.append-row');
  removeRowButton = document.querySelector('.remove-row');
  appendColumnButton = document.querySelector('.append-column');
  removeColumnButton = document.querySelector('.remove-column');

  rowSize = 4;
  cellsSize = 4;

  constructor() {
    this.getTableSize();
    this.addListeners();
  }

  getTableSize() {
    this.rows = this.tbody.querySelectorAll('tr');

    if (this.rows.length > 0) {
      const cells = this.rows[0].cells;

      this.rowSize = this.rows.length;
      this.cellsSize = cells.length;
    }
  }

  createRow = () => {
    if (this.rowSize === 10) {
      return;
    }

    const row = document.createElement('tr');

    for (let i = 0; i < this.cellsSize; i++) {
      row.insertCell();
    }

    this.tbody.append(row);
    this.checkRowButtonDisabled();
  };
  removeRow = () => {
    this.tbody.deleteRow(this.rowSize - 1);
    this.checkRowButtonDisabled();
  };

  createColumn = () => {
    if (this.cellsSize === 10) {
      return;
    }

    for (let i = 0; i < this.rowSize; i++) {
      this.tbody.rows[i].insertCell();
    }
    this.checkColumnButtonDisabled();
  };

  removeColumn = () => {
    for (let i = 0; i < this.rowSize; i++) {
      this.tbody.rows[i].deleteCell(this.cellsSize - 1);
    }

    this.checkColumnButtonDisabled();
  };

  addListeners() {
    this.appendRowButton.addEventListener('click', this.createRow);
    this.appendColumnButton.addEventListener('click', this.createColumn);
    this.removeColumnButton.addEventListener('click', this.removeColumn);
    this.removeRowButton.addEventListener('click', this.removeRow);
  }

  checkRowButtonDisabled() {
    this.getTableSize();

    if (this.rowSize >= 10) {
      this.appendRowButton.disabled = true;
    } else {
      this.appendRowButton.disabled = false;
    }

    if (this.rowSize > 2) {
      this.removeRowButton.disabled = false;
    } else {
      this.removeRowButton.disabled = true;
    }
  }

  checkColumnButtonDisabled() {
    this.getTableSize();

    if (this.cellsSize >= 10) {
      this.appendColumnButton.disabled = true;
    } else {
      this.appendColumnButton.disabled = false;
    }

    if (this.cellsSize > 2) {
      this.removeColumnButton.disabled = false;
    } else {
      this.removeColumnButton.disabled = true;
    }
  }
}

const table = new Table();

export default table;
