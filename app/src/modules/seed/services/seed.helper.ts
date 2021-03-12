import { getObjectId } from 'mongo-seeding'

export const mapToEntities = (kinds: string[],
                              breeds: string[],
                              names: string[]) => {
                                  const pets = []
                                  for( let i in names){
                                      pets.push({
                                          _id: getObjectId(names[i]),
                                          kind: kinds[i],
                                          breed: breeds[i],
                                          name: names[i],
                                          age: Math.floor(Math.random() * 5) + 1 ,
                                      })
                                  }
                                  return pets;
                      
                              
                            }

                              

