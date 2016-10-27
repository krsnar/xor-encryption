
var lib = require('../lib');

var username = "sanjeev";
var password = "q1w2e3r4t5";
var assert = require('assert');
// encrypt
var encrypted = lib.xor(password, username);
// decrypt happens with same function
var decrypted = lib.xor(encrypted, username);  //result == "q1w2e3r4t5"

assert(decrypted === password);


