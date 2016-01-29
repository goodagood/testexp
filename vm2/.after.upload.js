
var a = 3;

a + a;

if(log){
    if(file){
        log.add("\r\n");
        log.add("got file meta.li:\r\n")
        log.add(file.get_meta().html.li);
        log.add(file.get_meta().path);
    }

    log.add("\r\n");
    log.add('add from folder codes');
    log.add(Date.now().toString());
    log.save();
}

