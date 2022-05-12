import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import heroBanner from './heroBanner'
import navigation from './navigation'
import navItem from './navItem'
import link from './link'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ heroBanner, navigation, navItem, link ]),
})
