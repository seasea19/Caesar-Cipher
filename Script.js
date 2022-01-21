// Create a function that will be executed when the codes invoke it.
function enc_caesar(plaintext, shift) {
    // create an array with the name Alphabet that contains the the 26 letters in the alphabet.
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    // a string that will be the encrypted text
    var enc_string = ""
   
    for (let i = 0; i < plaintext.length; i++) { // loop will go through the given plaintext.
        for (let j = 0; j < letters.length; j++) { // Loop will go through the array called letters above.
            if (plaintext[i] == letters[j]) { // If the function is true, the code below will
                enc_string += letters[(j + shift) % 26]; // be excuted. when it does, it will add them and get the remainder after dividing,
            }
        }
        
    }

    console.log("Original String: " + plaintext) // Print the plaintext.
    console.log("Encrypted String: "  + enc_string) // Print the encrypted stirng
}


enc_caesar("Chelsea", 3); // plaintext and how many times it should rotate.
