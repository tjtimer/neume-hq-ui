import { Model } from '@vuex-orm/core'

export default class Person extends Model {
  static entity = 'people'

  static fields() {
    return {
      id: this.attr(null),
      name: this.string(),
      info: this.string().nullable()
    }
  }
}
