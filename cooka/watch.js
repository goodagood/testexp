var p = console.log;


module.exports.watch = watch;

function watch(req, res, next) {
    p(' you are watching through express.js middle-ware like function ');
    if(o){
        o.req = req;
        o.res = res;
    }
    //if(next) return next(req, res, next);
    next();
}

var o;
module.exports.seto = seto; 

function seto(o) {
    o = o;
};
