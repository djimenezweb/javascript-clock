const digitalClockElement = document.getElementById('digital-clock');
const dateElement = document.getElementById('date');
const secondHandElement = document.getElementById('second-hand');
const circleSecondElement = document.getElementById('circle--second');
const minuteHandElement = document.getElementById('minute-hand');
const circleMinuteElement = document.getElementById('circle--minute');
const hourHandElement = document.getElementById('hour-hand');
const circleHourElement = document.getElementById('circle--hour');

const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['January', 'February'];

const paddingTime = num => (num < 10 ? '0' + num : num);

const updateData = () => {
  const date = new Date();
  digitalClockElement.textContent = `${date.getHours()}:${paddingTime(date.getMinutes())}:${paddingTime(date.getSeconds())}`;
  dateElement.textContent = `${weekday.at(date.getDay())} ${date.getDate()} ${months.at(date.getMonth())} ${date.getFullYear()}`;

  secondHandElement.style.transform = `rotate(${date.getSeconds() * 6}deg)`;
  circleSecondElement.style.transform = `rotate(${-date.getSeconds() * 6}deg)`;
  circleSecondElement.textContent = date.getSeconds();

  minuteHandElement.style.transform = `rotate(${date.getMinutes() * 6}deg)`;
  circleMinuteElement.style.transform = `rotate(${-date.getMinutes() * 6}deg)`;
  circleMinuteElement.textContent = date.getMinutes();

  hourHandElement.style.transform = `rotate(${date.getHours() * 30 + date.getMinutes() / 2}deg)`;
  circleHourElement.style.transform = `rotate(${-date.getHours() * 30 - date.getMinutes() / 2}deg)`;
  circleHourElement.textContent = date.getHours();
};

setInterval(() => {
  updateData();
}, 1000);
