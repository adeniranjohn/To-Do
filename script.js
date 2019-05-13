let lists = document.getElementById('lists');
let input = document.getElementById('type');
let saveBtn = document.getElementById('save');
let counter = 0;
saveBtn.addEventListener('click', function () {
   if (input.value == " ") {

   } else {
      lists.innerHTML += '<div class="todo" id= `${counter}`>' + input.value + '</div>';
      input.value = "";

   }

});
