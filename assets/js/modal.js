// Product modal

const modal = document.querySelector('.product-modal');

const modalBackdrop = modal.querySelector(
  '.product-modal__backdrop'
);

const modalImage = modal.querySelector(
  '.product-modal__image img'
);

const modalName = modal.querySelector(
  '.product-modal__name'
);

const modalText = modal.querySelector(
  '.product-modal__text'
);

const modalPrice = modal.querySelector(
  '.product-modal__price'
);

const modalCloseButton = modal.querySelector(
  '.product-modal__close'
);

const sizeButtons = modal.querySelectorAll(
  '.product-modal__sizes .modal-option'
);

const additiveButtons = modal.querySelectorAll(
  '.product-modal__additives .modal-option'
);


let basePrice = 0;


/* Update total */

function updateModalPrice() {
  let total = basePrice;


  const selectedSize = modal.querySelector(
    '.product-modal__sizes .modal-option--active'
  );

  if (selectedSize) {
    total += Number(selectedSize.dataset.price);
  }


  additiveButtons.forEach((button) => {
    if (button.classList.contains('modal-option--active')) {
      total += Number(button.dataset.price);
    }
  });


  modalPrice.textContent = `$${total.toFixed(2)}`;
}


/* Reset modal options */

function resetModalOptions() {

  sizeButtons.forEach((button, index) => {
    button.classList.toggle(
      'modal-option--active',
      index === 0
    );
  });


  additiveButtons.forEach((button) => {
    button.classList.remove('modal-option--active');
  });
}


/* Category-specific labels */

function updateModalOptions(category) {

  const sizeTexts = modal.querySelectorAll(
    '.product-modal__sizes .modal-option__text'
  );

  const additiveTexts = modal.querySelectorAll(
    '.product-modal__additives .modal-option__text'
  );


  if (category === 'dessert') {

    sizeTexts[0].textContent = '50 g';
    sizeTexts[1].textContent = '100 g';
    sizeTexts[2].textContent = '200 g';

    additiveTexts[0].textContent = 'Berries';
    additiveTexts[1].textContent = 'Nuts';
    additiveTexts[2].textContent = 'Jam';

  } else if (category === 'tea') {

    sizeTexts[0].textContent = '200 ml';
    sizeTexts[1].textContent = '300 ml';
    sizeTexts[2].textContent = '400 ml';

    additiveTexts[0].textContent = 'Sugar';
    additiveTexts[1].textContent = 'Lemon';
    additiveTexts[2].textContent = 'Syrup';

  } else {

    sizeTexts[0].textContent = '200 ml';
    sizeTexts[1].textContent = '300 ml';
    sizeTexts[2].textContent = '400 ml';

    additiveTexts[0].textContent = 'Sugar';
    additiveTexts[1].textContent = 'Cinnamon';
    additiveTexts[2].textContent = 'Syrup';
  }
}


/* Open modal */

function openProductModal(card) {

  const image = card.querySelector(
    '.menu-card__image img'
  );

  const name = card.querySelector(
    '.menu-card__name'
  );

  const description = card.querySelector(
    '.menu-card__description p'
  );

  const price = card.querySelector(
    '.menu-card__price'
  );


  modalImage.src = image.src;
  modalImage.alt = image.alt;

  modalName.textContent = name.textContent.trim();

  modalText.textContent =
    description.textContent.trim();


  basePrice = Number(
    price.textContent.replace('$', '').trim()
  );


  updateModalOptions(card.dataset.category);

  resetModalOptions();

  updateModalPrice();


  modal.classList.add('product-modal--open');

  modal.setAttribute(
    'aria-hidden',
    'false'
  );

  document.body.classList.add('modal-open');
}


/* Close modal */

function closeProductModal() {

  modal.classList.remove(
    'product-modal--open'
  );

  modal.setAttribute(
    'aria-hidden',
    'true'
  );

  document.body.classList.remove(
    'modal-open'
  );
}


/* Product click */

menuCards.forEach((card) => {

  card.addEventListener('click', () => {
    openProductModal(card);
  });

});


/* Size selection */

sizeButtons.forEach((button) => {

  button.addEventListener('click', () => {

    sizeButtons.forEach((item) => {
      item.classList.remove(
        'modal-option--active'
      );
    });


    button.classList.add(
      'modal-option--active'
    );


    updateModalPrice();
  });

});


/* Additives selection */

additiveButtons.forEach((button) => {

  button.addEventListener('click', () => {

    button.classList.toggle(
      'modal-option--active'
    );


    updateModalPrice();
  });

});


/* Closing */
modalCloseButton.addEventListener(
  'click',
  closeProductModal
);


modalBackdrop.addEventListener(
  'click',
  closeProductModal
);


document.addEventListener('keydown', (event) => {

  if (
    event.key === 'Escape' &&
    modal.classList.contains('product-modal--open')
  ) {
    closeProductModal();
  }

});