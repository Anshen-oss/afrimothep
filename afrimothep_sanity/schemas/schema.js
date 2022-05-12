import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import heroBanner from './heroBanner'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ heroBanner ]),
})
