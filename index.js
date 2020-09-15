/* global $ */
'use strict';

function main() {
  //* Wanted to try this one with arrow functions, so no 'this'.
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

  //* Wanted to try these one with 'this', so no arrow function.

  $('.shopping-list').on('click', '.shopping-item-toggle', function (subm) {
    subm.preventDefault();
    let parent = $(this).closest('li');
    $(parent).find('.shopping-item').toggleClass('shopping-item__checked');
  });

  $('.shopping-list').on('click', '.shopping-item-delete', function (subm) {
    subm.preventDefault();
    let parent = $(this).closest('li');
    $(parent).remove();
  });
}

$(main);