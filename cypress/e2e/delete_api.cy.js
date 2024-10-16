require('cypress-plugin-api');

describe('DELETE para deletar algum dado existente', () => {
    it('DELETE em um post pelo ID', () => {
        cy.api({
            method: 'DELETE',
            url: 'posts/1'
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(`Status code: ${response.status}`)
            cy.log('Post deletado com sucesso.')
        })

        cy.api({
            method: 'GET',
            url: 'posts/1'
        }).then((response) => {
            // expect(response.status).to.eq(404) Nesse caso a validação não vai funcionar
            // por conta de se tratar de uma api de teste, mas deveria retornar o status 404 por não encontrar
            // o post deletado
        })
    });

    it('DELETE em um usuário pelo ID', () => {
        cy.api({
            method: 'DELETE',
            url: 'users/1'
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(`Status code: ${response.status}`)
            cy.log('Usuário deletado com sucesso.')
        })

        cy.api({
            method: 'GET',
            url: 'users/1'
        }).then((response) => {
            // expect(response.status).to.eq(404) Nesse caso a validação não vai funcionar
            // por conta de se tratar de uma api de teste, mas deveria retornar o status 404 por não encontrar
            // o usuário deletado
        })
    });

    it('DELETE em um comentário pelo ID', () => {
        cy.api({
            method: 'DELETE',
            url: 'comments/1'
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(`Status code: ${response.status}`)
            cy.log('Comentário deletado com sucesso.')
        })

        cy.api({
            method: 'GET',
            url: 'comments/1'
        }).then((response) => {
            // expect(response.status).to.eq(404) Nesse caso a validação não vai funcionar
            // por conta de se tratar de uma api de teste, mas deveria retornar o status 404 por não encontrar
            // o comentário deletado
        })
    });
});