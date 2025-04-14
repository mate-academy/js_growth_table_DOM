'use strict';

const container = document.querySelector('.container');
const tableSizeChangerButtons = {
  appendRow: container.querySelector('.append-row'),
  removeRow: container.querySelector('.remove-row'),
  appendColumn: container.querySelector('.append-column'),
  removeColumn: container.querySelector('.remove-column'),
};
const tableBody =
  document.querySelector('.field').tBodies[0] ||
  document.querySelector('.field');
const extremumTableSize = {
  min: 2,
  max: 10,
};

container.addEventListener('click', (e) => {
  const button = e.target;

  if (button.classList.contains('button')) {
    switch (true) {
      case button.classList.contains('append-row'):
        appendRow(
          tableBody,
          extremumTableSize,
          button,
          tableSizeChangerButtons.removeRow,
        );

        break;
      case button.classList.contains('remove-row'):
        removeRow(
          tableBody,
          extremumTableSize,
          button,
          tableSizeChangerButtons.appendRow,
        );

        break;
      case button.classList.contains('append-column'):
        appendColumn(
          tableBody,
          extremumTableSize,
          button,
          tableSizeChangerButtons.removeColumn,
        );

        break;
      case button.classList.contains('remove-column'):
        removeColumn(
          tableBody,
          extremumTableSize,
          button,
          tableSizeChangerButtons.appendColumn,
        );

        break;
      default:
        break;
    }
  }
});

function appendRow(tab, extremumSize, appendButton, removeButton) {
  if (tab.rows.length < extremumSize.max) {
    tab.appendChild(tab.rows[0].cloneNode('deep'));
  }

  if (tab.rows.length >= extremumSize.max) {
    appendButton.disabled = true;
  }

  if (removeButton.disabled && tab.rows.length > extremumSize.min) {
    removeButton.disabled = false;
  }
}

function removeRow(tab, extremumSize, removeButton, appendButton) {
  if (tab.rows.length > extremumSize.min) {
    tab.lastElementChild.remove();
  }

  if (tab.rows.length <= extremumSize.min) {
    removeButton.disabled = true;
  }

  if (appendButton.disabled && tab.rows.length > extremumSize.min) {
    appendButton.disabled = false;
  }
}

function appendColumn(tab, extremumSize, appendButton, removeButton) {
  if (tab.rows[0].cells.length < extremumSize.max) {
    for (const row of tab.rows) {
      row.appendChild(row.firstElementChild.cloneNode('deep'));
    }
  }

  if (tab.rows[0].cells.length >= extremumSize.max) {
    appendButton.disabled = true;
  }

  if (removeButton.disabled && tab.rows[0].cells.length > extremumSize.min) {
    removeButton.disabled = false;
  }
}

function removeColumn(tab, extremumSize, removeButton, appendButton) {
  if (tab.rows[0].cells.length > extremumSize.min) {
    for (const row of tab.rows) {
      row.lastElementChild.remove();
    }
  }

  if (tab.rows[0].cells.length <= extremumSize.min) {
    removeButton.disabled = true;
  }

  if (appendButton.disabled && tab.rows[0].cells.length > extremumSize.min) {
    appendButton.disabled = false;
  }
}
