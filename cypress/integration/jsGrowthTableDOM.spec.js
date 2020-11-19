'use strict';

describe('Growth table', () => {
  beforeEach('Open site', () => {
    cy.visit('https://taniaomelko.github.io/js_growth_table_DOM/');
    cy.get('tbody > tr').as('rows');
    cy.get('tbody :nth-child(1) :nth-child(n)').as('columns');
  });

  it('should have 4 rows', () => {
    cy.get('@rows')
      .then((rows) => {
        expect(rows, '4 rows').to.have.length(4);
      });
  });

  it('should have 4 columns', () => {
    cy.get('@columns')
      .then((columns) => {
        expect(columns, '4 column').to.have.length(4);
      });
  });

  it('should have max 10 columns', () => {
    for (let n = 0; n < 6; n++) {
      cy.get('.append-column').click();
    }

    cy.get('tbody > :nth-child(1) > :nth-child(n)')
      .then(($td) => {
        expect($td, '10 items').to.have.length(10);
      });
  });

  it('add column button should be disabled', () => {
    for (let n = 0; n < 6; n++) {
      cy.get('.append-column').click();
    }
    cy.get('.append-column').should('be.disabled');
  });

  it('removes one column', () => {
    cy.get('.remove-column').click();

    cy.get('@columns')
      .then((columns) => {
        expect(columns, '3 items').to.have.length(3);
      });
  });

  it('should have max 10 rows', () => {
    for (let n = 0; n < 6; n++) {
      cy.get('.append-row').click();
    }
    cy.get(':nth-child(7) > :nth-child(1)').should('exist');
  });

  it('add row button should be disabled', () => {
    for (let n = 0; n < 6; n++) {
      cy.get('.append-row').click();
    }
    cy.get('.append-row').should('be.disabled');
  });

  it('removes one row', () => {
    cy.get('.remove-row').click();

    cy.get('@rows')
      .then((rows) => {
        expect(rows, '3 items').to.have.length(3);
      });
  });

  it('should have 2 columns and 2 rows minimum', () => {
    cy.get('.remove-row').click().click();
    cy.get('.remove-column').click().click();

    cy.get('@rows')
      .then((rows) => {
        expect(rows, '2 items').to.have.length(2);
      });

    cy.get('@columns')
      .then((columns) => {
        expect(columns, '2 items').to.have.length(2);
      });
  });

  it('remove row button should be disabled', () => {
    cy.get('.remove-row').click().click();
    cy.get('.remove-row').should('be.disabled');
  });

  it('remove column button should be disabled', () => {
    cy.get('.remove-column').click().click();
    cy.get('.remove-column').should('be.disabled');
  });
});
