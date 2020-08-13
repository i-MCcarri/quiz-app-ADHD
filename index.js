// jQuery quiz-app
//Requirements:
//Button to start quiz
//user cannot skip questions without answering
//answer 5+ questions of multiple choice
//display current question number and ratio to total questions
//see current test score
//what happens if the answer is correct
//what happens if the answer is wrong
//received modal feedback, show correct answer
//move to the next question on answer submit
//end page / display total score
//start new quiz

//Technical Requirements:
//Render answer choices in a <form>
//use semantic HTML along with CSS and jQuery
//be accessible as possible
//associate `label` tags with inputs
//use responsive design
//be fully useable by keyboard tab through

// Create initial store

'use strict';

function generateItemElement(item) {
  return `
    <li data-item-id="${item.id}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
}


function generateShoppingItemsString(shoppingList) {
  console.log("Generating shopping list element");

  const items = shoppingList.map((item) => generateItemElement(item));
  
  return items.join("");
}


function renderShoppingList() {
  // render the shopping list in the DOM
  console.log('`renderShoppingList` ran');
  const shoppingListItemsString = generateShoppingItemsString(STORE);

  // insert that HTML into the DOM
  $('.js-shopping-list').html(shoppingListItemsString);
}


function addItemToShoppingList(itemName) {
  console.log(`Adding "${itemName}" to shopping list`);
  STORE.push({id: cuid(), name: itemName, checked: false});
}

function handleNewItemSubmit() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    console.log('`handleNewItemSubmit` ran');
    const newItemName = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    addItemToShoppingList(newItemName);
    renderShoppingList();
  });
}

function toggleCheckedForListItem(itemId) {
  console.log("Toggling checked property for item with id " + itemId);
  const item = STORE.find(item => item.id === itemId);
  item.checked = !item.checked;
}


function getItemIdFromElement(item) {
  return $(item)
    .closest('li')
    .data('item-id');
}

function handleItemCheckClicked() {
  $('.js-shopping-list').on('click', `.js-item-toggle`, event => {
    console.log('`handleItemCheckClicked` ran');
    const id = getItemIdFromElement(event.currentTarget);
    toggleCheckedForListItem(id);
    renderShoppingList();
  });
}

// delete item function 
function deleteListItem(itemId) {
  console.log (`Deleting list item with id ${itemId} from STORE`);
  const objItem = STORE.findIndex(item => item.id === itemId);
  STORE.splice(objItem, objItem+1);
}

function handleDeleteItemClicked() {
  // this function will be responsible for when users want to delete a shopping list
  // item
  // Listen for when a user clicks the 'delete' button on an item.
  $('.js-shopping-list').on('click', '.js-item-delete', event => {
  //Retrieve the item's id from the data attribute.
  const itemId = getItemIdFromElement(event.currentTarget);
  //Delete the item from STORE.
  deleteListItem(itemId);
  //Re-render the shopping list.
  renderShoppingList();
  console.log('`handleDeleteItemClicked` ran');
  });
}


// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
}

// when the page loads, call `handleShoppingList`
$(handleShoppingList);