function showModal() {
    const modalWrapper = document.querySelector('.modal-wrapper');
    const modalButtons = document.querySelectorAll('.modal-toggle');
    const closeModal = document.querySelectorAll('.close-btn');
     
    modalWrapper.focus();
      
    modalButtons.forEach(button => {
      button.addEventListener('click', () => {
        modalWrapper.classList.toggle('modal--active');
        modalWrapper.style.display='block';
      });
    });

    closeModal.forEach(button => {
        button.addEventListener('click', () => {
          modalWrapper.style.display='none';
        });
      });

    closeModal.forEach(button => {
    button.addEventListener('keypress', (e) => {
        if(e.keyCode ===13){
          modalWrapper.style.display='none';  
        }
    });
    });    
}

export default showModal