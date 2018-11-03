import moment from 'moment';

export default class DateHelpers {
  static formatDay(timestamp) {
    return moment(timestamp).format('ddd');
  }

  static formatTime(timestamp) {
    return moment(timestamp).format('hmma');
  }
}
