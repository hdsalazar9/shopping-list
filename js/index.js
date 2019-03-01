function addItemToList(item){
  let htmlToAdd = `
            <li>
              <div class="listItem">
                ${item}
                <div class="buttonsDiv">
                  <button class="checkButton myButton"> Check </button>
                  <button class="deleteButton myButton"> Delete </button>
                </div>
              </div>
            </li>`;

  $('.ShoppingList').append(htmlToAdd);
}

$('.SubmitButton').on('click',  function(event){
  event.preventDefault();
  let itemToAdd = $('.TextInput').val();
  if(itemToAdd != "")
    addItemToList(itemToAdd);
});

$('.ShoppingList').on('click', '.checkButton', function(event){
  event.preventDefault();
  $(this).parent().parent().toggleClass("checked");
});

$('.ShoppingList').on('click', '.deleteButton', function(event){
  event.preventDefault();
  $(this).parent().parent().remove();
});
