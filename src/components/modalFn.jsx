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