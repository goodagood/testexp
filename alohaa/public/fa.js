
function pick(object, ...keys) {
    //let result = Object.create(null);
    var result = Object.create(null);

    //for (let i = 0, len = keys.length; i < len; i++) {}
    for (var i = 0, len = keys.length; i < len; i++) {
        result[keys[i]] = object[keys[i]];
    }

    return result;
}
