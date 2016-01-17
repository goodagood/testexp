
var util = require("util");
var VM   = require('./vm2/index.js').VM; 


var locVar = 33;

var vm   = new VM({                   
    //require: true,                          
    //requireExternal: true,
    sandbox:{
        a:{
            what: 'i am a',
            time: Date(),
        },
        b:{
            what: 'i am b',
            time: Date(),
        },
        p: function(){
            console.log('dont do bad');
            console.log(arguments);
        },
        tp:util.log,
        lv:locVar,
    }

});                                       

var user_scripts = 'p(a); p("i want do some thing bad"); p("ok?"); 3 + 3;';

vm.run(user_scripts);
