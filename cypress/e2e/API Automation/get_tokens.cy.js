const API_PATHS = require('../../support/constants.js');
describe('API: /api/tokens', () => {
  it('GET tokens successfully', () => {
    cy.request({
      method: 'GET',
      url: API_PATHS.TOKENS,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});