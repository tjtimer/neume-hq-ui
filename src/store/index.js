import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMGraphQL from '@vuex-orm/plugin-graphql'

import Concert from './Concert'
import concerts from './concerts'
import Contact from './Contact'
import Venue from './Venue'
import venues from './venues'
import Person from './Person'
import people from './people'
import Friend from './Friend'
import TJsDB from '../plugins/db'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(Person, people)
database.register(Friend)
database.register(Contact)
database.register(Concert, concerts)
database.register(Venue, venues)

VuexORM.use(VuexORMGraphQL, { database, debug: true, connectionQueryMode: 'plain' })
VuexORM.use(TJsDB, { database })

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
})

export default store
