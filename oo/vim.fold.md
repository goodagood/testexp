
Vim is the editor, you can start to use vim in 10 minutes.  

And after 10 monthes, or even 10 years, there are still many learning curves,
and they are helpful, if you pay time.


# vim fold

In vim, there are times when we want to fold up some part of lines/codes, such
as when we don't want to read it right now, or we want make it short ...

We get a lot settings and key bindings.  They are good, they also hard to
learn or memory.  This happens to a lot of good tools such as vim.

Here, we are not going to show all the details to the last bit.  We just
play with it a little, and have fun.


# references

    vim
        :h fdm

    Joe 'Zonker' Brockmeier
        http://www.linux.com/learn/tutorials/442438-vim-tips-folding-fun

    Steve Losh
        http://learnvimscriptthehardway.stevelosh.com/chapters/48.html

    stackoverflow [vim]
    google vim foldmethod foldmarker



# Default key bindings (some of it)

    zf#j   :creates a fold from the cursor down # lines.
    zf/string :creates a fold from the cursor to string .
    zj     :moves the cursor to the next fold.
    zk     :moves the cursor to the previous fold.
    zo     :opens a fold at the cursor.
    zO     :opens all folds at the cursor.
    zm     :increases the foldlevel by one.
    zM     :closes all open folds.
    zr     :decreases the foldlevel by one.
    zR     :decreases the foldlevel to zero -- all folds will be open.
    zd     :deletes the fold at the cursor.
    zE     :deletes all folds.
    [z     :move to start of open fold.
    ]z     :move to end of open fold.


# The foldmethod option

The default foldmethod is manual -- that is, creating folds manually. 
However, Vim can also
create folds based on the way a file is indented, its syntax, or markers.

    :set foldmethod=indent

This will automatically create folds at every indent.
Consider a Cascading Style Sheet (CSS) file like this one:





Vim also offers a marker method, where folds are set by visible text markers
rather than invisible manual marks. To set this mode, run :set
foldmethod=marker. Then, when you set a fold, you'll see a marker with three
braces at the beginning and end of the fold, like this:

    /*{{{*/
    Folded text goes here...
    more
    and more
    /*}}}*/

The braces are set off by comment characters, depending on the type of file.
So, if you're working with an HTML file, you'll see <!--{{{-->, and if you're
editing a Python script, you'll see #{{{. You can also insert fold markers
manually if you want, and Vim will recognize them as well. Vim will also delete
the markers with the zd command, whether they were set manually or not.

Fold created with the marker method are subject to undo and redo operations,
unlike normal manual folds.

It's possible to set the foldmarker to something other than {{{ if you need to,
but the Vim docs recommend that you stick with the defaults.  To change the
foldmarker, use :set foldmarker=nnn,mmm where nnn is the character string to
start the marker, and mmm is the string to end the marker.

If you want to use a foldmethod other than "manual" all the time,
add this line to your ~/.vimrc:

    set foldmethod=foldoption

Vim has a few other foldmethods that may come in useful. See the foldmethod
documentation in the Vim reference materials for more on the foldmethod option.



<!--
    vim: set ft=markdown tw=78:
-->
