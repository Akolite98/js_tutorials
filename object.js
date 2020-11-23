

let car = {

    make: 'bmw',
    model: '745li',
    year: 2010,

    getPrice: function (){
        //perform some calc
        return 5000;
    },

    printDescription: function (){
        console.log(this.make + ' ' + this.model);


    }
};
car.printDescription();
console.log(car.year);
console.log(car['year']);

var anotherCar= {};
anotherCar.whatever = 'Presh'
console.log(anotherCar.whatever);

var a = {
    myProperty: { b: 'hi'},
};
console.log(a.myProperty.b);

// var c ={
//     myProperty:[1,2,3,'bob'],

// };
// console.log( typeof c.myProperty[3]);

var c = {
    myProperty:[

        {d: 'this'},
        {e:'can'},
        {f: 'do it'},
        {g:'we can'},

    ]
   
};
console.log(c.myProperty[1].e);

let carLot = [

    { year: 2005, make : 'Toyota', model : '4runner'},
    { year: 2002, make: 'G-wagon', model:'Spider'},
    {year: 2010, make:'Honda', model:'GLI'},
];

console.log(carLot[0].year +  ' ' +carLot [1].make);

let contacts = {

    customers:[
       { firstName:'Precious', lasNname: 'Nnorom', PhoneNumber: [09032281981,090322892838]},
       {firstName: 'Phynia', lastName: 'Ejiofor', PhoneNumber: 08066618935},
    ],

    employees:[
        {firstName:'George',lasNname:'Mmadu',PhoneNumber:08102882995},
        {firstName:'Stephen',lastName:'okonkwo',PhoneNumber: 09035272712},
    ],
    
};

console.log(contacts.customers[0].PhoneNumber[0]);
console.log(contacts.employees[1].lastName);