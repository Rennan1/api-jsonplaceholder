require('cypress-plugin-api');

// PATCH = Atualiza apenas os campos especificados, deixando o resto dos dados do recurso intactos.
// PUT = Substitui o recurso inteiro. Se você enviar um PUT e não incluir alguns campos, eles podem ser 
// removidos ou sobrescritos no servidor. 
describe('PATCH para editar parcialmente um dado existente', () => {
    it('PATCH em um usuário atualizando seu nome', () => {
        cy.api({
            method: 'PATCH',
            url: 'users/1',
            body: {
                name: 'Nome atualizado'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq('Nome atualizado')
            cy.log('Dado(s) atualizado(s) com sucesso!')
        })
    });

    it('PATCH em um post atualizando seu título', () => {
        cy.api({
            method: 'PATCH',
            url: 'posts/93',
            body: {
                title: 'Nome atualizado',
                body: 'Texto da postagem atualizado'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq('Nome atualizado')
            expect(response.body.body).to.eq('Texto da postagem atualizado')
            cy.log('Dado(s) atualizado(s) com sucesso!')
        })
    });
});