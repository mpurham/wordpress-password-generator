/*
	name: WordPress Password Generator
	description: Generate password for wp
	author: Marcell
	tags: wordpress, password, generator
	version: 1.0.0
*/

const PasswordHash = require('@polypad/passwordhash').PasswordHash;

function main(input) {
    var passwordHash = new PasswordHash();
    var hash = passwordHash.hashPassword(input.text);
    input.text = hash;
}