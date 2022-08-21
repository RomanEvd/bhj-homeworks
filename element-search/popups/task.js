let modalEl = document.getElementById("modal_main");
modalEl.classList.add('modal_active');

let modalButtons = document.getElementsByClassName('modal__close');
let closuerButtonEl = modalButtons.item(0);
let successButtonEl = modalButtons.item(1);
let successModalClosure = modalButtons.item(2);
let successEl = document.getElementById('modal_success');

let modalClosure = () => modalEl.classList.remove('modal_active');
let modalAccept = () => {
    modalClosure();
    successEl.classList.add('modal_active');
    return false;
}

successButtonEl.onclick = modalAccept;
closuerButtonEl.onclick = modalClosure;

let successModalCls = () => { 
    successEl.classList.remove('modal_active');
    return false;
}
let successBtnGreen = document.getElementsByClassName('btn_success').item(0);

successModalClosure.onclick = successModalCls;
successBtnGreen.onclick = successModalCls;