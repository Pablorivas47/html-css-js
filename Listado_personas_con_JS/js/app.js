
const people = [
    new Person('Pablo', 'Rivas'),
    new Person('Enzo', 'Hansen'),
];


function showperson(){
    let text = '';
    for (let p of people){
        text += `<li>${p.name}${p._nickname}</li>`;
    }
    document.getElementById('personas').innerHTML = text;
}

function addPerson(){
    const forma = document.forms['forma'];
    const name = forma['name'];
    const nickname = forma['nickname'];
    if(name.value != '' && nickname.value != ''){
        const person = new Person(name.value, nickname.value);
        people.push(person);
        showperson();
    }else{
        console.log('No hay una persona que agregar');
    }
    
}