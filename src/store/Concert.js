import Venue from './Venue'
import { Model } from '@vuex-orm/core'

export default class Concert extends Model {
  static entity = 'concerts'
  static eagerLoad = ['venue']

  static fields() {
    return {
      id: this.attr(Date.now()),
      date: this.attr(null),
      venueId: this.attr(null),
      venue: this.belongsTo(Venue, 'venueId')
      // infos: this.morphToMany(Info).nullable()
    }
  }
}
