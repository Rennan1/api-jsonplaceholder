require('cypress-plugin-api');

describe('POST para incluir um novo dado', () => {
    it('POST de um novo post', () => {
        cy.api({
            method: 'POST',
            url: 'posts',
            body: {
                title: 'Título da postagem',
                body: 'Conteúdo da postagem',
                userId: 2 // Usuário vinculado ao post
            }
        }).then((response) => {           
            expect(response.status).to.eq(201)
            expect(response.body.title).to.eq('Título da postagem')
            expect(response.body.userId).to.eq(2); // Verifica o userId vinculado ao post
            expect(response.body).to.have.property('id'); // Verifica se o ID foi gerado
        })
        
    });
});