// replace() method:
// this method returns a string replacing all the old char or CharSequence to new char or CharSequence.
// The original string will remain unchanged.

var str = "Germany is a very beautiful country.";

var replaced = str.replace("Germany", "France");

console.log(`original string ${str}`);
console.log(`replaced string ${replaced}`);

var withOutSpace = str.replace(" ", "");
console.log(`remove spaces: ${withOutSpace}`);

