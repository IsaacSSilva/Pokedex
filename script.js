let form = document.querySelector('form');

           
form.addEventListener('submit', function(e){

  e.preventDefault();

  let content = document.querySelector('#pokeinformation')
  let contentimg = document.querySelector('#pokeimg')
  let url = "https://pokeapi.co/api/v2/pokemon/";
  let nome = document.querySelector('#pokeinput');

  let valorName = this.pokeinput.value.toLocaleLowerCase();
  url = url + valorName

  let html = ''

  fetch(url)
    .then(content => content.json())
    .then(function(data) {
      
      html = `<p>Nome: ${data.name} 
              </br> 
              Tipo: ${data.types[0].type.name}</p>`
      content.innerHTML = html
  

      html = `<img title='${data.name} N:${data.id}' 
              src='${data.sprites.front_default}'>

              <img title='${data.name} N:${data.id}' 
              src='${data.sprites.back_default}'>`
      contentimg.innerHTML = html

      nome.value = ''

    })
    .catch(function(err){
      content.innerHTML  = `<p>Ops😅, Pokemon "<u>${valorName.toLocaleUpperCase()}</u>" nao encontrado </br> tente outra vez</p>`

      contentimg.innerHTML = ''

    })
});