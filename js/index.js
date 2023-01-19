//fragmento de codigo, menos de dos lineas
//let, var, const
//const genera una constante
//var() y let() generan una variable

//$scope = fragmento de codigo({})

//let y const son de $scope
//var no tiene $scope

/*//primer $scope 
function suma(){
    const num=2;
    let num2=3;
    var num3=4;
    //segundo $scope
    function sumaSegunda(){
        const num=3;
        var num2=4;
    }
}----------------------------*/

/*functions normales
function suma(num1, num2) {
  return num1 + num2
}

const suma = function (num1, num2) {
    return num1+num2
};

//return implicito ARROW FUNCTION
const suma = (num1, num2) => num1+num2;*/

//template string
const name ="ana"
const surname ="anaved"
const lastname ="vd"
const fullname = name + ' ' + surname + ' ' + lastname
const fullname2 = `${name} ${surname} ${lastname} '..muestra..'`

const person = {
    name: '',
    surname: '',
    lastname: null
}

(()=>{
    const name = person.name.toString();
    const name2 = `${person.name} ${person.lastname ? person.lastname: ''}`
})()

(()=>{

})()

//array
const roles = [1,2,3,{name:'', surname:''}]

//arrayList
const roles2 = [
    {
        key: 'ADMIN',
        name: 'Super administrador'
    },
    {
        key: 'USER',
        name: 'Usuario'
    }
]

//arrayList array List
const roles3 = {}

//PROTOTYPES: push. splice, indexOf, find, filter, map, forEach
roles2.forEach((element, index) => {
    console.log(element.name)
})

for(let i = 0; i <= roles.length; i++){
    console.log(roles[i].name)
}
/*
while(){
}

do{
}while()
*/
//desestruccion de objetos
const person2 = {
    name: 'Ana',
    age : 19,
    address: {
        street: 'Emiliano Zapata',
        number: 2
    }
}

console.log(person2.name)
console.log(person2.address.street)

(() => {
    const {name, address:{street}} = person2
    console.log(street);
})