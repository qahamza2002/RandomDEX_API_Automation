const API_PATHS = require('../../support/constants.js');

describe('API: GET nonce for userAddress', () => {
  it('should GET nonce successfully using userAddress from fixture', () => {
    cy.fixture('payloads.json').then((payloads) => {
      const userAddress = payloads.userAddressPayload.userAddress;
      const url = API_PATHS.GET_NOUNCE +encodeURIComponent(userAddress);

      cy.request({
        method: 'GET',
        url: url,
      }).then((response) => {
        expect(response.status).to.eq(200);
        // add more assertions if needed
      });
    });
  });
});
