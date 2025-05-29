const API_PATHS = require('../../support/constants.js');

describe('API: POST /api/tokens/signature/generate', () => {
    it('should generate token signature successfully and save response', () => {
        cy.fixture('tokenSignatureResponse.json').then((savedResponse) => {
            // Extract the "data" object from the response
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
