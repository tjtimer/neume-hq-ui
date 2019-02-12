import { Model } from '@vuex-orm/core'

export default class Venue extends Model {
  static entity = 'venues'
  static fields() {
    return {
      id: this.attr(null),
      name: this.string(''),
      city: this.string(''),
      zipCode: this.string(''),
      street: this.string('')
    }
  }
}
