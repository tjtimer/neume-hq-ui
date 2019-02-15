import {
  Model
} from '@vuex-orm/core'

class Event extends Model {
  static entity = 'events'

  static fields() {
    return {
      title: this.string(),
      dateStart: this.string(),
      timeStart: this.string('').nullable(),
      dateEnd: this.string('').nullable(),
      timeEnd: this.string('').nullable()
    }
  }
}
export default Event
