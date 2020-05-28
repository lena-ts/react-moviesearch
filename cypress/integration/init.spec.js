describe('cypress', () => {
  it('Visit app', () => {
    cy.visit('/');
  });
  it('Get data', () => {
    cy.request('src/data/SampleData.js');
  });
});
