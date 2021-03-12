import { Inject, Injectable } from "@nestjs/common";
import { InjectConnection } from "@nestjs/mongoose";
import { Seeder } from "mongo-seeding";
import { Connection } from "mongoose";
import path from 'path'


@Injectable()
export default class SeedService{
    constructor(@InjectConnection() private connection: Connection) {}
    async SeedAsync(){
        this.connection.db.listCollections().toArray((err,collNames) => {
            if (err) {
                console.log(err);
                return;
            }
            if(collNames.length === 0){
                const config = {
                    database: {
                        name: process.env.DB_NAME,
                    },
                    dropDatabase: true,
                }

                const seeder = new Seeder(config);
                const collections = seeder.readCollectionsFromPath(
                    path.resolve('app/src/modules/seed/data'),
                    {
                        transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
                    },
                );

                seeder.import(collections)
                      .then(()=> {
                          console.log('success!');
                      })
                      .catch(err => {
                          console.log(err)
                      });
            }
        })
    }
}