
def append_file(msg = 'please give a message', file_path = '/tmp/ruby-append-file')
    File.open(file_path, 'a'){ |f|
        f.write(Time.new)
        f.write("\r\n")
        f.write(msg)
        f.write("\r\n")
    }
end

append_file(Time.new)

