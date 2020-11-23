var counter = (function(){


    //private stuffs

    let count = 0;

    function Print(message){

        console.log(message + '---' + count);
    }


    // return an oject
    return {
        value: count,

        incerment:function(){
            count+= 1;
            print('After incerment: ');
        },

        reset: function(){
            print('Before reset: ');
            count = 0;
            print('After reset: ');
        },
    }


});
