
# Referrences

`https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings`
`https://github.com/sindresorhus/multiline`
`https://developers.google.com/web/updates/2015/01/ES6-Template-Strings?hl=en`
`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw`
`https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice`
`https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/`


# How to do multi-line string, or block string in Javascript


We can do string concatenation or array join:

    var myString = 'This "is" ' + what + ' ? And we know it!' + "\r\n";

    ['Micro', 'Apple', 'Pie'].join("\t");


## coffeescript

http://coffeescript.org/


String Interpolation, Block Strings, and Block Comments
Ruby-style string interpolation is included in CoffeeScript.
Double-quoted strings allow for interpolated values, using #{ ...
}, and single-quoted strings are literal. You may even use
interpolation in object keys.


`author = "Wittgenstein"`
`quote  = "A picture is a fact. -- #{ author }"`

`sentence = "#{ 22 / 7 } is a decent approximation of π"`


Multiline strings are allowed in CoffeeScript. Lines are joined
by a single space unless they end with a backslash. Indentation is
ignored.

    mobyDick = "Call me Ishmael. Some years ago --
      never mind how long precisely -- having little
      or no money in my purse, and nothing particular
      to interest me on shore, I thought I would sail
      about a little and see the watery part of the
      world..."


Block strings can be used to hold formatted or
indentation-sensitive text (or, if you just don't feel like
escaping quotes and apostrophes). The indentation level that
begins the block is maintained throughout, so you can keep it all
aligned with the body of your code.

    html = """
           <strong>
             cup of coffeescript
           </strong>
           """


## templates: 

- jade
- handlebars.js
- ejs
- underscore
- ...


## github repo: multiline

`https://github.com/sindresorhus/multiline`


    const str = multiline(function(){/*
    <!doctype html>
    <html>
        <body>
            <h1>❤ unicorns</h1>
        </body>
    </html>
    */});

 
The source code:

    var multiline = module.exports = function (fn) {
        if (typeof fn !== 'function') {
            throw new TypeError('Expected a function');
        }

        var match = reCommentContents.exec(fn.toString());

        if (!match) {
            throw new TypeError('Multiline comment missing.');
        }

        return match[1];
    };


# es6

`https://developers.google.com/web/updates/2015/01/ES6-Template-Strings?hl=en`


Strings in JavaScript have been historically limited, lacking the
capabilities one might expect coming from languages like Python or
Ruby. ES6 Template Strings (available in Chrome 41+),
fundamentally change that. They introduce a way to define strings
with domain-specific languages (DSLs), bringing better:

 -   String interpolation
 -   Embedded expressions
 -   Multiline strings without hacks
 -   String formatting
 -   String tagging for safe HTML escaping, localisation and more.

Rather than stuffing yet another feature into Strings as we know
them today, Template Strings introduce a completely different way
of solving these problems.


## Syntax

Template Strings use back-ticks (``) rather than the single or
double quotes we’re used to with regular strings. A template
string could thus be written as follows:

var greeting = `Yo World!`;

So far, Template Strings haven’t given us anything more than
normal strings do. Let’s change that.

## String Substitution

One of their first real benefits is string substitution.
Substitution allows us to take any valid JavaScript expression
(including say, the addition of variables) and inside a Template
Literal, the result will be output as part of the same string.

Template Strings can contain placeholders for string substitution
using the ${ } syntax, as demonstrated below:

// Simple string substitution
var name = "Brendan";
console.log(`Yo, ${name}!`);

// => "Yo, Brendan!"

As all string substitutions in Template Strings are JavaScript
expressions, we can substitute a lot more than variable names. For
example, below we can use expression interpolation to embed for
some readable inline math:

var a = 10;
var b = 10;
console.log(`JavaScript first appeared ${a+b} years ago. Crazy!`);

//=> JavaScript first appeared 20 years ago. Crazy!

console.log(`The number of JS MVC frameworks is ${2 * (a + b)} and
not ${10 * (a + b)}.`);
//=> The number of JS frameworks is 40 and not 200.

They are also very useful for functions inside expressions:

function fn() { return "I am a result. Rarr"; }
console.log(`foo ${fn()} bar`);
//=> foo I am a result. Rarr bar.

The ${} works fine with any kind of expression, including member
expressions and method calls:

var user = {name: 'Caitlin Potter'};
console.log(`Thanks for getting this into V8,
${user.name.toUpperCase()}.`);

// => "Thanks for getting this into V8, CAITLIN POTTER";

// And another example
var thing = 'drugs';
console.log(`Say no to ${thing}. Although if you're talking to
${thing} you may already be on ${thing}.`);

// => Say no to drugs. Although if you're talking to drugs you may
already be on drugs.

If you require backticks inside of your string, it can be escaped
using the backslash character \ as follows:

var greeting = `\`Yo\` World!`;


## Multiline Strings

Multiline strings in JavaScript have required hacky workarounds
for some time. Current solutions for them require that strings
either exist on a single line or be split into multiline strings
using a \ (blackslash) before each newline. For example:

var greeting = "Yo \
World";

Whilst this should work fine in most modern JavaScript engines,
the behaviour itself is still a bit of a hack. One can also use
string concatenation to fake multiline support, but this equally
leaves something to be desired:

var greeting = "Yo " +
"World";

Template Strings significantly simplify multiline strings. Simply
include newlines where they are needed and BOOM. Here’s an
example:

Any whitespace inside of the backtick syntax will also be
considered part of the string.

console.log(`string text line 1
string text line 2`);

## Tagged Templates

So far, we’ve looked at using Template Strings for string
substitution and for creating multiline strings. Another powerful
feature they bring is tagged templates. Tagged Templates transform
a Template String by placing a function name before the template
string. For example:

fn`Hello ${you}! You're looking ${adjective} today!`

The semantics of a tagged template string are very different from
those of a normal one. In essence, they are a special type of
function call: the above “desugars” into

fn(["Hello ", "! You're looking ", " today!"], you, adjective);

Note: Nicholas Zakas goes into more detail on the break-down of
these arguments in the Template Strings section of his excellent
book, Understanding ES6.

Note how the (n + 1)th argument corresponds to the substitution
that takes place between the nth and (n + 1)th entries in the
string array. This can be useful for all sorts of things, but one
of the most straightforward is automatic escaping of any
interpolated variables.

For example, you could write a HTML-escaping function such that..

html`<p title="${title}">Hello ${you}!</p>`

returns a string with the appropriate variables substituted in,
but with all HTML-unsafe characters replaced. Let’s do that. Our
HTML-escaping function will take two arguments: a username and a
comment. Both may contain HTML unsafe characters (namely ‘, “, <,
>, and &). For example, if the username is “Domenic Denicola” and
>the comment is “& is a fun tag”, we should output:



<!--
    vim: set ft=markdown tw=66:
-->
