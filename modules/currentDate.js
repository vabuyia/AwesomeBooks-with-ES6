export function printTime() {
  const currentDate = document.querySelector('#currentDate');
  //// eslint-disable-next-line no-undef
  currentDate.innerHTML = `<div>${luxon.DateTime.now().toFormat('MMMM dd yyyy, hh:mm:ss')}</div>`;
}