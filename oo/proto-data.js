
function Some(){
    console.log('Some is a function');
    this.aa = "I am aa";
    this.makebb = function(bb){
        this.bb = bb;
        console.log(`aa: ${this.aa} and bb: ${this.bb}`);
    };
}

Some.prototype.data = function(){
    console.log("some-prototype-data");
};


