'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector("table");

    const appendRowBtn = document.querySelector(".append-row");
    const removeRowBtn = document.querySelector(".remove-row");
    const appendColBtn = document.querySelector(".append-column");
    const removeColBtn = document.querySelector(".remove-column");

    const MAX = 10;
    const MIN = 2;

    function updateButtons() {
        const rows = table.rows.length;
        const cols = table.rows[0].cells.length;

        appendRowBtn.disabled = rows >= MAX;
        removeRowBtn.disabled = rows <= MIN;
        appendColBtn.disabled = cols >= MAX;
        removeColBtn.disabled = cols <= MIN;
    }

    appendRowBtn.addEventListener("click", () => {
        const cols = table.rows[0].cells.length;
        const newRow = table.insertRow();
        for (let i = 0; i < cols; i ++) {
            newRow.insertCell();
        }
        updateButtons();
    });

    removeRowBtn.addEventListener("click", () => {
        if (table.rows.length > MIN) {
            table.deleteRow(-1);
        }
        updateButtons();
    });

    appendColBtn.addEventListener("click", () => {
        for (let row of table.rows) {
            row.insertCell();
        }
        updateButtons();
    });
    
    removeColBtn.addEventListener("click", () => {
        if (table.rows[0].cells.length > MIN) {
            for (let row of table.rows) {
                row.deleteCell(-1);
            }
        }
        updateButtons();
    });

    //Initialize button states
    updateButtons();
});
