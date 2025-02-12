describe('For User', () => {
    let userToken

    it('Post User', () => {
        cy.request({
            method: 'POST',
            url: `http://localhost:3000/auth/login`,
            headers: { 'Content-Type': 'application/json' },
            body: { "username": "visitor9", "password": "password9" }
        }).should((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('token')
            expect(response.body.token).to.be.a('string').and.not.be.empty
            userToken = response.body.token  // Store token for later use
        })
    })

    it('Get Admin Data', () => {
        cy.request({
            method: 'GET',
            url: `http://localhost:3000/admin-data`,
            headers: { Authorization: `Bearer ${userToken}` }, // Correct header format
            failOnStatusCode: false  // Prevent Cypress from failing on 401 responses
        }).should((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(403)  // Expect Forbidden (403) for non-admin user
            expect(response.body).to.deep.equal({ "message": "Forbidden" })
        })
    })

    it('Get Visitor Data', () => {
        cy.request({
            method: 'GET',
            url: `http://localhost:3000/visitor-data`,
            headers: { Authorization: `Bearer ${userToken}` }, // Correct header format
            failOnStatusCode: false
        }).should((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(403)  // Expect Forbidden (403) for non-admin user
            expect(response.body).to.deep.equal({ "message": "Forbidden" })
        })
    })
})
