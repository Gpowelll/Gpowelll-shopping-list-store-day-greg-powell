/* eslint-disable no-undef */
'use strict';


let store = [];

function generateListItem(newItem) {
  return `<li data-item-id= '${newItem.id}'>
    <span class="shopping-item ${newItem.checked ? 'shopping-item__checked' : ''}"> ${newItem.name}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
}


function handleAddItem() {
  // eslint-disable-next-line no-undef
  $('#js-shopping-list-form').submit(e => {
    e.preventDefault();
    const entry = $('#shopping-list-entry').val();
    store.push({ id: cuid(), name: entry, checked: false });
    renderPage();
    // eslint-disable-next-line no-undef
    $('#js-shopping-list-form')[0].reset();
  });
  renderPage();

}

function handleCheck() {

  $('.shopping-list').on('click', '.shopping-item-toggle', e => {
    let item = $(e.target).closest('li').data('item-id');
    for (let i = 0; i < store.length; i++) {
      if (store[i].id === item) {
        store[i].checked = !store[i].checked
      }
    }
    renderPage();
  });
}



function handleDeleteListItem() {
  $('.shopping-list').on('click', '.shopping-item-delete', e => {
    let item = $(e.target).closest('li').data('item-id');
    for (let i = 0; i < store.length; i++) {
      if (store[i].id === item) {
        store.splice(i, 1);
      }
    }
    renderPage();
  });
}



function renderPage() {
  let html = [];
  for (let i = 0; i < store.length; i++) {
    html.push(generateListItem(store[i]));
  }

  $('.shopping-list').html(html);
}


function main() {
  renderPage();
  handleAddItem();
  handleCheck();
  handleDeleteListItem();


}

$(main);