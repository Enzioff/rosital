// Привязка попапа к курсору
const tableLines = document.querySelectorAll('.table__line');
const tableLinks = document.querySelectorAll('.table__link');
const popup = document.querySelector('.popup');
const popupTitle = popup.querySelector('.popup__title');

tableLinks.forEach((item, i)=> {
  function onMouseMove(evt) {

    requestAnimationFrame(function movePointer() {
        if (!popup.classList.contains('popup--active')) {
          popup.classList.remove('popup--disable');
          popup.style.left = (evt.pageX - (popup.offsetWidth / 1.9)) + 'px';
          popup.style.top = (evt.pageY - (popup.offsetHeight * 1.15)) + 'px';
        } else {
          popup.classList.add('popup--active');
        }
    });
    const tableItem = tableLines[i].querySelectorAll('.table__item');
    popupTitle.textContent = `${tableItem[1].textContent} ${tableItem[2].textContent}`;
  }

  function disablePointer() {
      requestAnimationFrame(function hidePointer() {
        popup.classList.remove('popup--active');
        popup.classList.add('popup--disable');
      });
  }

  item.addEventListener('mousemove', onMouseMove, false);
  item.addEventListener('mouseleave', disablePointer, false);
});