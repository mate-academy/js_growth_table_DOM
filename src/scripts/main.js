'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('.field');
    const appendRowBtn = document.querySelector('.append-row');
    const removeRowBtn = document.querySelector('.remove-row');
    const appendColumnBtn = document.querySelector('.append-column');
    const removeColumnBtn = document.querySelector('.remove-column');

    function getRowCount() {
        return table.querySelectorAll('tr').length;
    }

    function getColumnCount() {
        const firstRow = table.querySelector('tr');
        return firstRow ? firstRow.querySelectorAll('td').length : 0;
    }

    function updateButtonStates() {
        const currentRowCount = getRowCount();
        const currentColumnCount = getColumnCount();

        appendRowBtn.disabled = currentRowCount >= 10;
        removeRowBtn.disabled = currentRowCount <= 2;

        appendColumnBtn.disabled = currentColumnCount >= 10;
        removeColumnBtn.disabled = currentColumnCount <= 2;
    }

    updateButtonStates();

    appendRowBtn.addEventListener('click', () => {
        if (getRowCount() < 10) {
            const newRow = table.insertRow();
            const currentColumnCount = getColumnCount();
            for (let i = 0; i < currentColumnCount; i++) {
                newRow.insertCell();
            }
            updateButtonStates();
        }
    });

    removeRowBtn.addEventListener('click', () => {
        if (getRowCount() > 2) {
            table.deleteRow(getRowCount() - 1);
            updateButtonStates();
        }
    });

    appendColumnBtn.addEventListener('click', () => {
        if (getColumnCount() < 10) {
            const rows = table.querySelectorAll('tr');
            rows.forEach(row => {
                row.insertCell();
            });
            updateButtonStates();
        }
    });

    removeColumnBtn.addEventListener('click', () => {
        if (getColumnCount() > 2) {
            const rows = table.querySelectorAll('tr');
            const lastColumnIndex = getColumnCount() - 1;
            rows.forEach(row => {
                row.deleteCell(lastColumnIndex);
            });
            updateButtonStates();
        }
    });
});