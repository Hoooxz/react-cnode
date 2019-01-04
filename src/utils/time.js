export function getDateDiff(timeStr) {
  //将字符串转换成时间格式
  var timePublish = new Date(timeStr);
  var timeNow = new Date();
  var minute = 1000 * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var month = day * 30;
  var diffValue = timeNow - timePublish;
  var diffYear = diffValue / (12 * month);
  var diffMonth = diffValue / month;
  var diffWeek = diffValue / (7 * day);
  var diffDay = diffValue / day;
  var diffHour = diffValue / hour;
  var diffMinute = diffValue / minute;

  var result = ''

  if (diffValue < 0) {
    result = "unknown";
  }
  else if (diffYear > 1) {
    result = parseInt(diffYear, 10) + "年前";
  }
  else if (diffMonth > 1) {
    result = parseInt(diffMonth, 10) + "月前";
  }
  else if (diffWeek > 1) {
    result = parseInt(diffWeek, 10) + "周前";
  }
  else if (diffDay > 1) {
    result = parseInt(diffDay, 10) + "天前";
  }
  else if (diffHour > 1) {
    result = parseInt(diffHour, 10) + "小时前";
  }
  else if (diffMinute > 1) {
    result = parseInt(diffMinute, 10) + "分钟前";
  }
  else {
    result = "刚刚";
  }
  return result;
}