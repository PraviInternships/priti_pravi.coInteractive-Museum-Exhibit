describe('For Artifacts', () => {

    it('Get Artifacts', () => {
        cy.request('GET',`http://localhost:3000/artifacts`)
        .should((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200) 
            assert.deepEqual(response.body, {"message":"Retrieve all artifacts"})
  
        })       
    })

    it('Post Artifacts', () => {
        cy.request({
            method: 'POST',
            url: `http://localhost:3000/artifacts/add-artifact`,
            headers: {
                        'Content-Type' : 'application/json'
                     },
            body: {
                    "name": "Ancient Vase",
                    "description": "A beautifully crafted ancient vase from the Ming dynasty.",
                    "year": 1500
                }
        })

        .should((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(201) 
            assert.deepEqual(response.body, {"message":"Artifact added successfully","artifact":{"name":"Ancient Vase","description":"A beautifully crafted ancient vase from the Ming dynasty.","year":1500}})  
        })       
    })

});
