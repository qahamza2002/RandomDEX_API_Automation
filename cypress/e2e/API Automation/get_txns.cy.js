const API_PATHS = require('../../support/constants.js');
describe('API: /api/tokens', () => {
  it('GET txnns successfully', () => {
      cy.request({
        method: 'GET',
        url: API_PATHS.TRANSACTIONS,
      }).then((response) => {
        expect(response.status).to.eq(200); 
      });
  });
});