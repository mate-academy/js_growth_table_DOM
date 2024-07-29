'use strict';

// write code here

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const container = document.querySelector('.container');

const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const table = document.querySelector('.field tbody');
const tableItems = table.children;

const MIN_ITEMS = 2;
const MAX_ITEMS = 10;

const initAddListener = (component, type, callback) => {
  component.addEventListener(type, callback);
};

const updateDisableStatus = () => {
  const isMaxRows = table.children.length === MAX_ITEMS;
  const isMinRows = table.children.length === MIN_ITEMS;

  const isMaxColumns = table.lastElementChild.children.length === MAX_ITEMS;
  const isMinColumns = table.lastElementChild.children.length === MIN_ITEMS;

  appendRowBtn.disabled = isMaxRows;
  removeRowBtn.disabled = isMinRows;

  appendColumnBtn.disabled = isMaxColumns;
  removeColumnBtn.disabled = isMinColumns;
};

const createNewRow = () => {
  const th = document.createElement('tr');
  const lastRow = table.lastElementChild;

  for (let i = 0; i < lastRow.children.length; i++) {
    const td = document.createElement('td');

    th.append(td);
  }
  table.append(th);

  updateDisableStatus();
};

const removeLastRow = () => {
  table.lastElementChild.remove();

  updateDisableStatus();
};

const removeColumn = () => {
  for (const row of tableItems) {
    row.querySelector('td').remove();
  }

  updateDisableStatus();
};

const appendColumn = () => {
  for (const row of tableItems) {
    const column = document.createElement('td');

    row.append(column);
  }

  updateDisableStatus();
};

const App = () => {
  initAddListener(container, 'click', (e) => {
    if (e.target.classList.contains('append-row')) {
      createNewRow();
    } else if (e.target.classList.contains('remove-row')) {
      removeLastRow();
    } else if (e.target.classList.contains('append-column')) {
      appendColumn();
    } else if (e.target.classList.contains('remove-column')) {
      removeColumn();
    }
  });
};

App();
