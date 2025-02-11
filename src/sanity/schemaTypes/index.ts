import { type SchemaTypeDefinition } from 'sanity'
import cars from './cars'
import category from './category'
import review from './review'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars , category ,review],
}
