document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const tbody = table.querySelector('tbody');

  const btnAddRow = document.querySelector('.append-row');
  const btnRemoveRow = document.querySelector('.remove-row');
  const btnAddColumn = document.querySelector('.append-column');
  const btnRemoveColumn = document.querySelector('.remove-column');

  const min = 2;
  const max = 10;

  const updateButtons = () => {
    const rows = tbody.rows.length;
    const cols = tbody.rows[0].cells.length;

    btnAddRow.disabled = rows >= max;
    btnRemoveRow.disabled = rows <= min;
    btnAddColumn.disabled = cols >= max;
    btnRemoveColumn.disabled = cols <= min;
  };

  btnAddRow.addEventListener('click', () => {
    const rows = tbody.rows.length;

    if (rows >= max) {
      return;
    }

    const cols = tbody.rows[0].cells.length;
    const row = document.createElement('tr');

    for (let i = 0; i < cols; i += 1) {
      row.appendChild(document.createElement('td'));
    }
    tbody.appendChild(row);
    updateButtons();
  });

  btnRemoveRow.addEventListener('click', () => {
    const rows = tbody.rows.length;

    if (rows <= min) {
      return;
    }

    tbody.removeChild(tbody.lastElementChild);
    updateButtons();
  });

  btnAddColumn.addEventListener('click', () => {
    const cols = tbody.rows[0].cells.length;

    if (cols >= max) {
      return;
    }

    Array.from(tbody.rows).forEach((row) => {
      row.appendChild(document.createElement('td'));
    });
    updateButtons();
  });

  btnRemoveColumn.addEventListener('click', () => {
    const cols = tbody.rows[0].cells.length;

    if (cols <= min) {
      return;
    }

    Array.from(tbody.rows).forEach((row) => {
      row.removeChild(row.lastElementChild);
    });
    updateButtons();
  });

  updateButtons();
});
