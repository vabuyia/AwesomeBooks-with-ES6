const printTime = () => {
  const currentDate = document.querySelector('#currentDate');
  currentDate.innerHTML = `<div>${luxon.DateTime.now().toFormat('MMMM dd yyyy, hh:mm:ss')}</div>`;
}

export {printTime}