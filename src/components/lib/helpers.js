export function formatDate (str) {
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const date = str.split('T')[0].split('-');
  const clock = str.split('T')[1].split(':');

  const month = months[Number(date[1])];
  const day = createDay(Number(date[2]));
  const year = date[0].slice(2);
  const time = `${clock[0]}:${clock[1]}`;

  function createDay (day) {
    switch (day) {
      case 1:
      case 21:
      case 31:
        return `${day}st`;
      case 2:
      case 22:
        return `${day}nd`;
      case 3:
      case 23:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  }

  return `${day} ${month}  |  ${time}`;
}