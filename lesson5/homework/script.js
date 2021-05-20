const fav = document.querySelector('#fav');
const button = document.querySelector('#button');
const output = document.querySelect('.list');

button.addEventListener('click', () => {
  //create the elements in the list
 if(fav.value != '') {
  let li = document.createElement("li");
  let delete = document.createElement("button");
  //change the properties
  li.textContent = fav.value;
  delete.textContent = '❌'
  li.append('delete');
  output.append(li);
  delete.addEventListener('click', () => {
    list.removeChild(li);
    fav.focus;

  });
fav.value = '';
fav.focus;

 }
});