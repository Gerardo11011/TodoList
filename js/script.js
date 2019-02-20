document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault();
  var inputValue = document.getElementById('todotexto').value;
  document.getElementById('todotexto').value = ''
  let li = document.createElement('li')

  let checkbox = document.createElement('input')
  checkbox.setAttribute("type", "checkbox");

  let label = document.createElement('label')
  label.innerText = inputValue

  li.appendChild(checkbox)
  li.appendChild(label)

  if (inputValue === '') {
   alert("No ingresaste una actividad");
 } else {
   document.getElementById("todolista").appendChild(li)
 }
})

document.getElementById("mark").addEventListener("click", function(event){
    event.preventDefault()

    let lista = document.getElementById("todolista").getElementsByTagName("li")
    for(var i = 0; i < lista.length; i++){
      lista[i].getElementsByTagName("input")[0].checked = true
    }
})

document.getElementById("delete").addEventListener("click", function(event){
  event.preventDefault()
  let lista = document.getElementById('todolista')
  lista.innerHTML = ''
})

document.getElementById("clear").addEventListener("click", function(event){
    event.preventDefault()

    let lista = document.getElementById("todolista").getElementsByTagName("li")
    for(var i = 0; i < lista.length; i++){
      lista[i].getElementsByTagName("input")[0].checked = false
    }
})
