let url = `https://randomuser.me/api/`

const api = new XMLHttpRequest();
api.open('GET', url , true);
api.send();

api.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){

        let datos = JSON.parse(this.responseText);
        console.log(datos.results);


        for(let item of datos.results){
            document.querySelector('.text-2').innerHTML = `<div>${item.name.first} ${item.name.last}</div>`;
            document.querySelector('.text').innerHTML = `<div>${item.name.first} ${item.name.last}</div>`;
            document.querySelector('.foto').setAttribute('src', `${item.picture.large}`);
            document.querySelector('.sub-title-1').innerHTML = `<div>${item.name.first} ${item.name.last}</div>`;
            document.querySelector('.sub-title-2').innerHTML = `<div>${item.location.country} | ${item.location.city}</div>`;
            document.querySelector('.sub-title-3').innerHTML = `<div>${item.email}</div>`;
        }
    }
}