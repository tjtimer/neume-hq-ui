import { Model } from '@vuex-orm/core'

export default class Address extends Model {
  static entity = 'addresses'

  static fields() {
    return {
      id: this.attr(null),
      streetName: this.string(),
      streetNumber: this.string(),
      postalCode: this.string(),
      cityId: this.attr(null)
    }
  }
}
