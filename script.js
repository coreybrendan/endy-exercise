// reveal exit pop-up on mouse event
const mouseExit = (event) => {
  const intentToLeave = 
    !event.toElement 
    && !event.relatedTarget 
    && event.clientY < 10;
  
  if (intentToLeave) {
    document.removeEventListener('mouseout', mouseExit);

    const modalElement = document.getElementById('popup');
    modalElement.classList.remove('visually-hidden');
  }

};

setTimeout(() => {
  document.addEventListener('mouseout', mouseExit);
  document.addEventListener('keydown', closePop);

}, 5000);

// escape exit pop-up on icon/mask click event or esc key
const closePop = (event) => {
  const shouldClose =
  event.target.id === 'popup' ||
  event.target.className === 'close-circle' ||
  event.keyCode === 27;

  if (shouldClose) {
    document.getElementById('popup').classList.add('visually-hidden');
  }
};

document.querySelector('.exit-popup').addEventListener('click', closePop);