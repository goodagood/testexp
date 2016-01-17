#!/usr/bin/expect

# easy tool by 'expect' to jump to points.

spawn node
expect ">"
send "var p = console.log;\r"
expect ">"

send ".load  ./app1.js\r"

expect "ok start interact:"
interact
