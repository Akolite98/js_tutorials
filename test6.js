let person = {
    head : 1,
    mouth : 1,
    name : 'Precious',
    leg : 2,
    movement: (name) =>{

        this.name = name;
        console.log(`${this.name} can make movement`);

    },

    talk:()=>{
        console.log('can talk');
    },
    breathing: ()=>{
        console.log('can breathe');
    },
    eat: ()=>{
        console.log('can eat');
    },



};
person.movement('Precious');