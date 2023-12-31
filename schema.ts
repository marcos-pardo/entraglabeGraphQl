export const typeDefs = `#graphql
  
  type Pet {
    id: ID!
    name: String!
    breed: String!
  }
  
  type Query {
    pets(breed: String): [Pet!]!        
    pet(id: ID!): Pet!  
    nameMascota(name: String): [Pet!]!
    petNameAndBreed(name: String, breed: String): [Pet!]!
      
  }
  


  type Mutation {
    addPet(name: String!, breed: String!): Pet! # Añade una mascota -> Devuelve un Pet
    deletePet(id: ID!): Pet! # Borra una mascota -> Devuelve un Pet 
    updatePet(id: ID!, name: String!, breed: String!): Pet! # Actualiza una mascota -> Devuelve un Pet
  }
`;