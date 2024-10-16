require('cypress-plugin-api');

describe('GET para consultar postagens', () => {
    it('GET de todos os posts', () => {
        cy.api({
            method: 'GET',
            url: 'posts'
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(`A quantidade de posts é de: ${response.body.length}`)
        })
    });

    it('GET de um post pelo ID', () => {
        cy.api({
            method: 'GET',
            url: 'posts/2'
        }).then((response) => {
            expect(response.status).to.eq(200)
            console.log(response.body)
            cy.log(`O título do post é: ${response.body.title}`)
        })
    });

    it('GET de um post com ID inexistente', () => {
        cy.api({
            method: 'GET',
            url:'posts/987',
            failOnStatusCode: false
        }).then((response) => {
            cy.log(`Status code: ${response.status}`)
        })
    });

    it('GET dos comentários de um post', () => {
        cy.api({
            method: 'GET',
            url: 'posts/2/comments'
        }).then((response) => {
            cy.log(`Status code: ${response.status}`)
            cy.log(`Número de comentários no post: ${response.body.length}`)
        })
    });
});