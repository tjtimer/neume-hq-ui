
import { Model } from '@vuex-orm/core'

class Friend extends Model {
  static entity = 'friends'
  static fields() {
    return {
      pId: this.attr(null),
      id: this.attr(''),
      name: this.attr(''),
      email: this.attr(''),
      birthday: this.attr(new Date().toJSON()),
      since: this.attr(null, (v) => new Date(Date(v)).toJSON()),
      friendshipId: this.attr(null)
    }
  }
}
export default Friend
