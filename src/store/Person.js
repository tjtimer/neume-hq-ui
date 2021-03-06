import Friend from './Friend'
import { Model } from '@vuex-orm/core'

class Person extends Model {
  static entity = 'people'
  static eagerLoad = ['friends']
  static fields() {
    return {
      id: this.attr(''),
      name: this.attr(''),
      email: this.attr(''),
      birthday: this.attr(new Date().toJSON()),
      friends: this.hasMany(Friend, 'pId')
    }
  }
}
export default Person
