import { Model } from '@vuex-orm/core'
import Contact from './Contact'
import Concert from './Concert'

export default class Venue extends Model {
  static entity = 'venues'

  static fields() {
    return {
      id: this.attr(null),
      name: this.string(''),
      city: this.string(''),
      zip: this.string(''),
      street: this.string(''),
      contactId: this.string(''),
      contact: this.hasOne(Contact, 'contactId'),
      concerts: this.hasMany(Concert)
    }
  }
}
