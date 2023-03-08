
const createRow = () => {
  const column = document.querySelector('#column');

  const newRoll = document.createElement('td');
  const newCheckbox = document.createElement('input');
  const newInput = document.createElement('input');
  const newEditBtn = document.createElement('button');
  const newDeleteBtn = document.createElement('button');
  const newEditSpn = document.createElement('span');
  const newDeleteSpn = document.createElement('span');

  newCheckbox.setAttribute("type", "checkbox");
  newInput.setAttribute("type", "text");

  newEditBtn.classList.add("display-flex-center");
  newDeleteBtn.classList.add("display-flex-center");

  newEditBtn.classList.add("orange");
  newDeleteBtn.classList.add("red");

  newEditSpn.classList.add("material-symbols-outlined");
  newDeleteSpn.classList.add("material-symbols-outlined");

  newEditSpn.classList.add("orange");
  newDeleteSpn.classList.add("red");

  newEditSpn.innerText= 'edit_note';
  newDeleteSpn.innerText= 'delete';

  column.appendChild(newRoll);
  newRoll.appendChild(newCheckbox);
  newRoll.appendChild(newInput);
  newRoll.appendChild(newEditBtn);
  newRoll.appendChild(newDeleteBtn);
  newDeleteBtn.appendChild(newDeleteSpn);
  newEditBtn.appendChild(newEditSpn);

  newDeleteBtn.addEventListener("click", () => {
    newRoll.remove()
})

};
