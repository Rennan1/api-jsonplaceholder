require('cypress-plugin-api');
// PATCH = Atualiza apenas os campos especificados, deixando o resto dos dados do recurso intactos.
// PUT = Substitui o recurso inteiro. Se você enviar um PUT e não incluir alguns campos, eles podem ser 
// removidos ou sobrescritos no servidor. 
describe('PUT para editar totalmente um dado existente', () => {
    it('PUT Data', () => {
        cy.api({
            method: 'PUT',
            url: 'comments/7',
            body: {
                postId: 2,
                id: 7,
                name: 'Nome do comentário editado',
                email: 'email@atualizado.com.br',
                body: 'Corpo do comentário atualizado'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.postId).to.eq(2)
            expect(response.body.id).to.eq(7)
            expect(response.body.name).to.eq('Nome do comentário editado')
            expect(response.body.email).to.eq('email@atualizado.com.br')
            expect(response.body.body).to.eq('Corpo do comentário atualizado')
        })
    });

    it('PUT para editar uma tarefa pelo ID', () => {
        cy.api({
            method: 'PUT',
            url: 'todos/4',
            body: {
                userId: 1,
                id: 4,
                title: 'Título da tarefa atualizado',
                completed: 'false',
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.userId).to.eq(1)
            expect(response.body.id).to.eq(4)
            expect(response.body.title).to.eq('Título da tarefa atualizado')
            expect(response.body.completed).to.eq('false')
        })
    });
});