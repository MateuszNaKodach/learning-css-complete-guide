let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.modal__action--negative');
let selectPlanButton = document.querySelectorAll('.plan button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

for (let i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', () => {
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

const closeModal = () => {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
};

backdrop.addEventListener('click', () => {
    closeModal();
    mobileNav.classList.remove('open');
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

toggleButton.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});




