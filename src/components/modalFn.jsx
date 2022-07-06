/**
 * When the user clicks or press the enter key on the button, the modal will appear, 
 * and when the user clicks or press the enter key on the close button, the modal will disappear.
 */
function showModal() {
    const modalWrapper = document.querySelector('.modal-wrapper');
    const closeModal = document.querySelectorAll('.close-btn');
     
    modalWrapper.focus();

    
    closeModal.forEach(button => {
        button.addEventListener('click', () => {
          modalWrapper.style.display='none';
          document.querySelector(".modal-wrapper").classList.remove("modal--active")
        });
      });

    closeModal.forEach(button => {
    button.addEventListener('keypress', (e) => {
        if(e.keyCode ===13){
          modalWrapper.style.display='none';
          document.querySelector(".modal-wrapper").classList.remove("modal--active")
        }
    });
    });    
}

export default showModal