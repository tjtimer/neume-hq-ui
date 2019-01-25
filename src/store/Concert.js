import { Model } from '@vuex-orm/core'
import Friend from './Person'
import Venue from './Venue'

export default class Concert extends Model {
  static entity = 'concerts'

  static fields() {
    return {
      id: this.attr(null),
      date: this.attr(null),
      info: this.string('').nullable(),
      venueId: this.attr(),
      venue: this.belongsTo(Venue, 'venueId'),
      guests: this.hasMany(Friend, 'id', 'friendIds')
    }
  }
  // get venue() {
  //   return Venue.query().find(this.venueId || 1)
  // }
}
