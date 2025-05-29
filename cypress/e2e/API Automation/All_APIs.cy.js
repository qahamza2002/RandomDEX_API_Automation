const API_PATHS = require('../../support/constants.js');

describe('API Tests Suite', () => {
  
  it('GET /api/transactions successfully', () => {
    cy.request({
      method: 'GET',
      url: API_PATHS.TRANSACTIONS,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('GET /api/tokens successfully', () => {
    cy.request({
      method: 'GET',
      url: API_PATHS.TOKENS,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('GET nonce successfully using userAddress from fixture', () => {
    cy.fixture('payloads.json').then((payloads) => {
      const userAddress = payloads.userAddressPayload.userAddress;
      const url = API_PATHS.GET_NOUNCE + encodeURIComponent(userAddress);

      cy.request({
        method: 'GET',
        url: url,
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  it('POST /api/tokens/signature/generate and save response', () => {
    cy.fixture('payloads.json').then((payloads) => {
      cy.request({
        method: 'POST',
        url: API_PATHS.TOKENS_SIGNATURE_GENERATE,
        body: payloads.userAddressPayload,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200);

        // Save response to fixture file
        cy.writeFile('cypress/fixtures/tokenSignatureResponse.json', response.body);
      });
    });
  });

  it('POST /api/tokens/verify-signature using saved signature response', () => {
    cy.fixture('tokenSignatureResponse.json').then((savedResponse) => {
      const payload = savedResponse.data;

      cy.request({
        method: 'POST',
        url: API_PATHS.VERIFY_SIGNATURE,
        body: payload,
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response));
      });
    });
  });

});
