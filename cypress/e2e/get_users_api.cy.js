require('cypress-plugin-api');

describe('GET para consultar usuários', () => {
  
  it('GET de usuário pelo ID', () => {
    cy.api({
      method: 'GET',
      url: 'users/3'
    }).then((response) =>{
      expect(response.status).to.eq(200)
      cy.log(`Nome do usuário de ID 3: ${response.body.name}`)
      cy.log(`Endereço de e-mail do usuário de ID 3: ${response.body.email}`)
      cy.log(`Nome de usuário do usuário de ID 3: ${response.body.username}`)
    })
  });
  it('GET de um usuário com ID inexistente', () => {
    cy.api({
      method: 'GET',
      url: 'users/23',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('GET de todos os usuários', () => {
    cy.api({
      method: 'GET',
      url: 'users'
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log(`Status code: ${response.status}`)
      cy.log(`Quantidade de usuários: ${response.body.length}`)
    })
  }) 
})