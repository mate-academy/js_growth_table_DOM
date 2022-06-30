'use strict';

const buttons = document.querySelector('.container');
const table = document.querySelector('tbody');

buttons.addEventListener('click', e => {
    const targetButton = e.target;

    if (!targetButton.matches('button')) {
        return;
    }
    
    if ( targetButton.classList.contains('append-row') ) {
        const numberCells = table.rows[0].cells.length;
        const numberRows = table.rows.length;

        if ( numberRows === 10 ) {
            return;
        }

        const newRow = table.insertRow();

        for ( let i = 0; i < numberCells; i++ ) {
            newRow.insertCell();
        }
        
    }

    if ( targetButton.classList.contains('remove-row') ) {
        const numberRows = table.rows.length;

        if ( numberRows === 2 ) {
            return;
        }

        table.lastElementChild.remove();
    }

    if (targetButton.classList.contains('append-column')) {
        const numberRows = table.rows.length;
        const numberCells = table.rows[0].cells.length;

        if ( numberCells === 10 ) {
            return;
        }

        for ( let i = 0; i < numberRows; i++ ) {
            table.rows[i].insertCell();
        }
    }

    if (targetButton.classList.contains('remove-column')) {
        const numberRows = table.rows.length;
        const numberCells = table.rows[0].cells.length;

        if ( numberCells === 2 ) {
            return;
        }

        for ( let i = 0; i < numberRows; i++ ) {
            table.rows[i].cells[0].remove();
        }
    }
})
