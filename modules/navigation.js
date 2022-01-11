const navigation = () => {
  const nav = document.querySelector('nav');
  const listTab = document.querySelector('.list-tab');
  const formTab = document.querySelector('.form-tab');
  const contactTab = document.querySelector('.contact-tab');
  const listSection = document.getElementById('list-section');
  const formSection = document.getElementById('form-section');
  const contactSection = document.getElementById('contact-section');

  nav.addEventListener('click', (event) => {
    if (event.target.innerText === 'List') {
      listSection.style.display = 'block';
      formSection.style.display = 'none';
      contactSection.style.display = 'none';
      listTab.classList.add('red');
      formTab.classList.remove('red');
      contactTab.classList.remove('red');
    } else if (event.target.innerText === 'Add new') {
      listSection.style.display = 'none';
      formSection.style.display = 'block';
      contactSection.style.display = 'none';
      listTab.classList.remove('red');
      formTab.classList.add('red');
      contactTab.classList.remove('red');
    } else if (event.target.innerText === 'Contact') {
      listSection.style.display = 'none';
      formSection.style.display = 'none';
      contactSection.style.display = 'block';
      listTab.classList.remove('red');
      formTab.classList.remove('red');
      contactTab.classList.add('red');
    }
  });
};

export { navigation as default };