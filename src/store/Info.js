import Person from './Person'
import { Model } from '@vuex-orm/core'

export default class Info extends Model {
  static entity = 'infos'

  static fields() {
    return {
      id: this.attr(null),
      title: this.string(''),
      body: this.string(''),
      creator: this.belongsTo(Person)
    }
  }
}
