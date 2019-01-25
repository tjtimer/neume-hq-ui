import Address from './Address'
import Info from './Info'
import { Model } from '@vuex-orm/core'

export default class Contact extends Model {
  static entity = 'contacts'

  static fields() {
    return {
      id: this.attr(null),
      name: this.string(),
      addresses: this.hasMany(Address),
      phoneNumbers: this.string().nullable(),
      infos: this.hasMany(Info)
    }
  }
}
