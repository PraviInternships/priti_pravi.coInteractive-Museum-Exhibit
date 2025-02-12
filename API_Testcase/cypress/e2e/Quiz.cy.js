describe('For Quizzes', () => {

    it('Get Quizzes', () => {
        cy.request('GET',`http://localhost:3000/quiz/12345`)
        .should((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200) 
            assert.deepEqual(response.body, {"message": "Quiz for artifact ID 12345"})  
        })       
    })

    it('Post Quizzes', () => {
        cy.request({
            method: 'POST',
            url: `http://localhost:3000/quiz/submit-quiz`,
            headers: {
                        'Content-Type' : 'application/json'
                     },
            body: {
                "artifactId": "12345",
                "answers": {
                  "question1": "A",
                  "question2": "C",
                  "question3": "B"
                }
              }
        })

        .should((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200) 
            assert.deepEqual(response.body, {"message":"Quiz submitted successfully",
                        "quizData":{"artifactId":"12345",
                        "answers":{"question1":"A","question2":"C","question3":"B"}
                    }})  
        })       
    })

});
