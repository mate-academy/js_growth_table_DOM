'use strict';

class GrowthTable {
  /**
   * Max count of rows or columns
   * @type {number}
   */
  _maxDimCount = 10;

  /**
   * Min count of rows or columns
   * @type {number}
   */
  _minDimCount = 2;

  /**
   * Field element
   * @type {Element}
   * @private
   */
  _field = null;

  /**
   * Field modificator flags
   * @type {Object}
   * @private
   */
  _currentState = {
    canAddX: null,
    canRemX: null,
    canAddY: null,
    canRemY: null,
  };

  // --- NEW: Added properties to hold button elements ---
  _addRowBtn = null;
  _remRowBtn = null;
  _addColBtn = null;
  _remColBtn = null;

  /**
   *
   * @param {string} tableFieldSel - field table
   * @param {string} appendRowButtonSel - button to append row
   * @param {string} removeRowButtonSel - button to remove row
   * @param {string} appendColButtonSel - button to append col
   * @param {string} removeColButtonSel - button to remove col
   * @param {number} minDimCount - minimal dimension count for table
   * @param {number} maxDimCount - maximum dimension count for table
   */
  constructor(
    tableFieldSel = '.field',
    appendRowButtonSel = '.append-row.button',
    removeRowButtonSel = '.remove-row.button',
    appendColButtonSel = '.append-column.button',
    removeColButtonSel = '.remove-column.button',
    minDimCount = 2,
    maxDimCount = 10,
  ) {
    this._field = document.querySelector(tableFieldSel);

    if (!(this._field instanceof HTMLTableElement)) {
      throw new Error('Table field element is not found in DOM');
    }

    // --- MODIFIED: Assign buttons to class properties ---
    this._addRowBtn = document.querySelector(appendRowButtonSel);
    this._remRowBtn = document.querySelector(removeRowButtonSel);
    this._addColBtn = document.querySelector(appendColButtonSel);
    this._remColBtn = document.querySelector(removeColButtonSel);

    if (
      !(this._addRowBtn instanceof Element) ||
      !(this._remRowBtn instanceof Element) ||
      !(this._addColBtn instanceof Element) ||
      !(this._remColBtn instanceof Element)
    ) {
      throw new Error('Some of control elements are not found in DOM');
    }

    // instantiate limits
    this._minDimCount = minDimCount;
    this._maxDimCount = maxDimCount;

    // --- MODIFIED: Add listeners to the stored button properties ---
    this._addRowBtn.addEventListener('click', this.clickHandler(0, 1));
    this._remRowBtn.addEventListener('click', this.clickHandler(0, -1));
    this._addColBtn.addEventListener('click', this.clickHandler(1, 0));
    this._remColBtn.addEventListener('click', this.clickHandler(-1, 0));

    // sync current state of field
    this.#syncCurrentState();
  }

  // --- MODIFIED: This entire method is updated ---
  #syncCurrentState() {
    // First, assume all actions are possible
    this._currentState = {
      canAddY: true,
      canRemY: true,
      canAddX: true,
      canRemX: true,
    };

    const tbody = this.#getBodyOfField();
    const rowCount = tbody.rows.length;
    // Handle case where there are no rows to prevent errors
    const colCount = tbody.rows[0]?.cells.length || 0;

    // Check against limits and update state
    if (rowCount >= this._maxDimCount) {
      this._currentState.canAddY = false;
    }

    if (rowCount <= this._minDimCount) {
      this._currentState.canRemY = false;
    }

    if (colCount >= this._maxDimCount) {
      this._currentState.canAddX = false;
    }

    if (colCount <= this._minDimCount) {
      this._currentState.canRemX = false;
    }

    // --- NEW: Apply the state to the buttons in the DOM ---
    this._addRowBtn.disabled = !this._currentState.canAddY;
    this._remRowBtn.disabled = !this._currentState.canRemY;
    this._addColBtn.disabled = !this._currentState.canAddX;
    this._remColBtn.disabled = !this._currentState.canRemX;
  }

  /**
   * Create or get tbody of current table
   * @return {*|HTMLTableSectionElement}
   */
  #getBodyOfField() {
    return this._field.tBodies[0] ??
      this._field.appendChild(document.createElement('tbody'));
  }

  /**
   * Dispatches the correct table modification based on dx and dy.
   * This is the refactored version.
   */
  clickHandler(dx, dy) {
    return function () {
      if (dy !== 0) {
        this.#changeRows(dy); // Delegate to the new row handler
      }

      if (dx !== 0) {
        this.#changeCols(dx); // Delegate to the new column handler
      }

      // Sync the button states after any change
      this.#syncCurrentState();
    }.bind(this);
  }

  /**
   * Adds or removes rows from the table.
   * @param {number} delta - The number of rows to add (> 0) or remove (< 0).
   * @private
   */
  #changeRows(delta) {
    const tbody = this.#getBodyOfField();

    if (delta > 0) {
      // --- ADD ROWS ---
      const refRow = tbody.lastElementChild;

      // Can't add rows if there are none to copy
      if (!refRow) {
        return;
      }

      for (let i = 0; i < delta; i++) {
        if (tbody.rows.length >= this._maxDimCount) {
          break;
        }

        const newRow = tbody.insertRow();

        Array.from(refRow.cells).forEach((cell) => {
          newRow.insertCell().innerHTML = cell.innerHTML;
        });
      }
    } else {
      // --- REMOVE ROWS ---
      const numToRemove = Math.abs(delta);

      for (let i = 0; i < numToRemove; i++) {
        if (tbody.rows.length <= this._minDimCount) {
          break;
        }
        tbody.deleteRow(-1);
      }
    }
  }

  /**
   * Adds or removes columns from the table.
   * @param {number} delta - The number of cols to add (> 0) or remove (< 0).
   * @private
   */
  #changeCols(delta) {
    const tbody = this.#getBodyOfField();

    if (delta > 0) {
      // --- ADD COLS ---
      Array.from(tbody.rows).forEach((row) => {
        if (row.cells.length >= this._maxDimCount) {
          return;
        }

        const lastCell = row.cells[row.cells.length - 1];

        row.insertCell().innerHTML = lastCell?.innerHTML ?? '';
      });
    } else {
      // --- REMOVE COLS ---
      Array.from(tbody.rows).forEach((row) => {
        if (row.cells.length <= this._minDimCount) {
          return;
        }
        row.deleteCell(-1);
      });
    }
  }
}

// Ensure instantiation occurs after the table exists
document.addEventListener('DOMContentLoaded', function () {
  // eslint-disable-next-line no-unused-vars
  const growthTable = new GrowthTable();
});
