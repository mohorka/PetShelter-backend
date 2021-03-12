import { mapToEntities } from "../../services/seed.helper"

const kind = ['cat','dog','parrot','rabbit','chinchilla']
const breed = ['unbred','Shepherd','Ara','Angora','long-tailed']
const names = ['Simba','Sam','Pat','Fluffy','Chilla']

export const pets = mapToEntities(kind,breed,names);