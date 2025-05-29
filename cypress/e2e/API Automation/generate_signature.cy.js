const API_PATHS = require('../../support/constants.js');

describe('API: POST /api/tokens/signature/generate', () => {
  it('should generate token signature successfully and save response', () => {
    cy.fixture('payloads.json').then((payloads) => {
      cy.request({
        method: 'POST',
        url: API_PATHS.TOKENS_SIGNATURE_GENERATE,
        body: payloads.userAddressPayload,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200);

        // Save the response body as JSON file in fixtures folder (or any path)
        cy.writeFile('cypress/fixtures/tokenSignatureResponse.json', response.body);
      });
    });
  });
});
