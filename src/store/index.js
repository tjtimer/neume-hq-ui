import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMGraphQL from '@vuex-orm/plugin-graphql'

import Concert from './Concert'
import Contact from './Contact'
import Venue from './Venue'
import Person from './Person'
import concerts from './concerts'
import Info from './Info'
import Address from './Address'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(Concert, concerts)
database.register(Address)
database.register(Contact)
database.register(Venue)
database.register(Person)
database.register(Info)

VuexORM.use(VuexORMGraphQL, { database })

export default new Vuex.Store({
  plugins: [VuexORM.install(database)]
})
