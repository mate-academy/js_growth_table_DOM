'use strict';

const MIN_COUNT = 2;
const MAX_COUNT = 10;

const TableController = function (tbody, buttons) {
  if (TableController.instance) {
    return TableController.instance;
  }

  if (!tbody || !buttons) {
    return;
  }

  this.tbody = tbody;
  this.buttons = buttons;

  this._destroyed = false;

  this._state = {
    min: MIN_COUNT,
    max: MAX_COUNT,
    cols: null,
    rows: null,
  };

  const detectedCols = [...this.tbody.rows].reduce(
    (max, row) => Math.max(max, row.cells.length),
    0,
  );

  this.cols = this.clamp(detectedCols);
  this.syncRowsWithDom();
  this.normalizeCells(this.cols);
  this.updateButtons();

  this.initHandlers();
  this.bindEvents();
  TableController.instance = this;
};

TableController.prototype = {
  constructor: TableController,

  syncRowsWithDom() {
    const detected = this.tbody.rows.length;
    const wanted = this.clamp(detected || this.min);

    while (this.tbody.rows.length > wanted) {
      this.tbody.removeChild(this.tbody.lastElementChild);
    }

    if (this.tbody.rows.length < wanted) {
      const frag = document.createDocumentFragment();

      while (frag.children.length + this.tbody.rows.length < wanted) {
        const tr = this.createRow(this.cols);

        frag.appendChild(tr);
      }

      this.tbody.appendChild(frag);
    }

    this.rows = this.tbody.rows.length;
  },
  normalizeCells(cols) {
    const rows = [...this.tbody.rows];

    if (rows.length === 0) {
      const frag = document.createDocumentFragment();

      for (let i = 0; i < this.min; i++) {
        const tr = document.createElement('tr');

        while (tr.cells.length < cols) {
          tr.appendChild(document.createElement('td'));
        }

        frag.appendChild(tr);
      }
      this.tbody.appendChild(frag);

      this.rows = this.tbody.rows.length;

      return;
    }

    rows.forEach((row) => {
      while (row.cells.length < cols) {
        row.appendChild(document.createElement('td'));
      }

      while (row.cells.length > cols) {
        row.deleteCell(row.cells.length - 1);
      }
    });

    return this.tbody.rows.length;
  },
  initHandlers() {
    this._onAppendCol = (e) => this.appendCol(e);
    this._onAppendRow = (e) => this.appendRow(e);
    this._onRemoveCol = (e) => this.removeCol(e);
    this._onRemoveRow = (e) => this.removeRow(e);
  },
  bindEvents() {
    if (this.appendColBtn) {
      this.appendColBtn.addEventListener('click', this._onAppendCol);
    }

    if (this.appendRowBtn) {
      this.appendRowBtn.addEventListener('click', this._onAppendRow);
    }

    if (this.removeColBtn) {
      this.removeColBtn.addEventListener('click', this._onRemoveCol);
    }

    if (this.removeRowBtn) {
      this.removeRowBtn.addEventListener('click', this._onRemoveRow);
    }
  },
  createRow(cols) {
    const tr = document.createElement('tr');

    for (let i = 0; i < cols; i++) {
      const td = document.createElement('td');

      tr.appendChild(td);
    }

    return tr;
  },
  clamp(value) {
    return Math.max(this.min, Math.min(value, this.max));
  },
  appendCol() {
    if (this._destroyed || !this.tbody) {
      return;
    }

    if (this.cols >= this.max) {
      return;
    }

    [...this.tbody.rows].forEach((row) => {
      const td = document.createElement('td');

      row.appendChild(td);
    });
    this.cols = this.tbody.rows[0]?.cells.length ?? 0;
    this.updateButtons();
  },
  removeCol() {
    if (this._destroyed || !this.tbody) {
      return;
    }

    if (this.cols <= this.min) {
      return;
    }

    [...this.tbody.rows].forEach((row) => {
      const last = row.lastElementChild;

      if (last) {
        row.removeChild(last);
      }
    });
    this.cols = this.tbody.rows[0]?.cells.length ?? 0;
    this.updateButtons();
  },
  appendRow() {
    if (this._destroyed || !this.tbody) {
      return;
    }

    if (this.rows >= this.max) {
      return;
    }

    const tr = this.createRow(this.cols);

    this.tbody.appendChild(tr);
    this.rows = this.tbody.rows.length;

    this.updateButtons();
  },
  removeRow() {
    if (this._destroyed || !this.tbody) {
      return;
    }

    if (this.rows <= this.min) {
      return;
    }

    const lastRow = this.tbody.lastElementChild;

    if (lastRow) {
      this.tbody.removeChild(lastRow);
    }

    this.rows = this.tbody.rows.length;
    this.updateButtons();
  },
  updateButtons() {
    if (this._destroyed) {
      return;
    }

    if (this.appendRowBtn) {
      this.appendRowBtn.disabled = this.rows >= this.max;
    }

    if (this.removeRowBtn) {
      this.removeRowBtn.disabled = this.rows <= this.min;
    }

    if (this.appendColBtn) {
      this.appendColBtn.disabled = this.cols >= this.max;
    }

    if (this.removeColBtn) {
      this.removeColBtn.disabled = this.cols <= this.min;
    }
  },
  destroy() {
    if (this.appendColBtn) {
      this.appendColBtn.removeEventListener('click', this._onAppendCol);
    }

    if (this.appendRowBtn) {
      this.appendRowBtn.removeEventListener('click', this._onAppendRow);
    }

    if (this.removeColBtn) {
      this.removeColBtn.removeEventListener('click', this._onRemoveCol);
    }

    if (this.removeRowBtn) {
      this.removeRowBtn.removeEventListener('click', this._onRemoveRow);
    }

    this._onAppendCol = this._onRemoveCol = null;
    this._onAppendRow = this._onRemoveRow = null;
    this._destroyed = true;
    this._state = null;
    this.tbody = this.buttons = null;
    TableController.instance = null;
  },
};

Object.defineProperties(TableController.prototype, {
  appendRowBtn: {
    get() {
      return this.buttons?.appendRowBtn;
    },
  },
  appendColBtn: {
    get() {
      return this.buttons?.appendColBtn;
    },
  },
  removeRowBtn: {
    get() {
      return this.buttons?.removeRowBtn;
    },
  },
  removeColBtn: {
    get() {
      return this.buttons?.removeColBtn;
    },
  },
  cols: {
    get() {
      return this._state ? this._state.cols : undefined;
    },
    set(value) {
      if (!this._state) {
        return;
      }

      const n = Number(value);

      if (!Number.isFinite(n)) {
        return;
      }

      this._state.cols = this.clamp(n);
    },
  },
  rows: {
    get() {
      return this._state ? this._state.rows : undefined;
    },
    set(value) {
      if (!this._state) {
        return;
      }

      const n = Number(value);

      if (!Number.isFinite(n)) {
        return;
      }

      this._state.rows = this.clamp(n);
    },
  },
  min: {
    get() {
      return this._state ? this._state.min : undefined;
    },
  },
  max: {
    get() {
      return this._state ? this._state.max : undefined;
    },
  },
});

TableController.instance = null;

TableController.create = function () {
  if (TableController.instance) {
    return TableController.instance;
  }

  const tbody = document.querySelector('.container table tbody');

  const buttons = {
    appendColBtn: document.querySelector('.append-column.button'),
    removeColBtn: document.querySelector('.remove-column.button'),
    appendRowBtn: document.querySelector('.append-row.button'),
    removeRowBtn: document.querySelector('.remove-row.button'),
  };

  if (
    !tbody ||
    !buttons.appendColBtn ||
    !buttons.removeColBtn ||
    !buttons.appendRowBtn ||
    !buttons.removeRowBtn
  ) {
    return;
  }

  TableController.instance = new TableController(tbody, buttons);

  return TableController.instance;
};

(() => {
  TableController.create();
})();
