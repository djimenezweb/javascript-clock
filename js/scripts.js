const digitalClockElement = document.getElementById('digital-clock');
const dateElement = document.getElementById('date');
const secondHandElement = document.getElementById('second-hand');
const minuteHandElement = document.getElementById('minute-hand');
const hourHandElement = document.getElementById('hour-hand');

const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const months = ['January', 'February'];

const paddingTime = num => (num < 10 ? '0' + num : num);

const updateData = () => {
  const date = new Date();
  digitalClockElement.textContent = `${date.getHours()}:${paddingTime(
    date.getMinutes()
  )}:${paddingTime(date.getSeconds())}`;
  dateElement.textContent = `${weekday.at(
    date.getDay()
  )} ${date.getDate()} ${months.at(date.getMonth())} ${date.getFullYear()}`;
  secondHandElement.style.transform = `rotate(${date.getSeconds() * 6}deg)`;
  minuteHandElement.style.transform = `rotate(${date.getMinutes() * 6}deg)`;
  hourHandElement.style.transform = `rotate(${
    date.getHours() * 30 + date.getMinutes() / 2
  }deg)`;
};

setInterval(() => {
  updateData();
}, 1000);
