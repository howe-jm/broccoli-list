/* global $ */
'use strict';

//* This function stores templates and adds them to the list.
function renderList() {
  $('#js-shopping-list-form').on('submit', (subm) => {
    subm.preventDefault();
    let item = $(subm.currentTarget).find('#shopping-list-entry');
    if (item.val().toLowerCase() === 'broccoli') {
      $('.shopping-list').append(`
      <li>
        <span class="shopping-item"><span class="not-italic">🥦🥦🥦</span> BROCCOLI!!!! <span class="not-italic">🥦🥦🥦</span></span></span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
      item.val('');
    } else if (item.val()) {
      $('.shopping-list').append(`
        <li>
          <span class="shopping-item">${item.val()}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
      item.val('');
    } else {
      $('.shopping-list').append(`
      <li>
        <span class="shopping-item">We could just not add anything to the list when the field is blank, but since you clearly wanted broccoli, here is broccoli. <span class="not-italic">🥦</span></span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
      item.val('');
    }
  });
}

//* This function handles toggling the checked item class.

function handleToggle() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function () {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}
//* This function handles deleting the items.
function handleDelete() {
  $('.shopping-list').on('click', '.shopping-item-delete', function () {
    $(this).closest('li').remove();
  });
}

//* This function calls all of the other functions.

function main() {
  renderList();
  handleToggle();
  handleDelete();
}

$(main);
