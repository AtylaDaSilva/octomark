import { capitalize } from "@/functions/capitalize";

test('should return a string in which the first letter of each word is in upper case', () => {
   const test = [
    "the brown fox leapt over the lazy dog",
    "this   phrase  has      many    spaces !",
    "this_counts_as_a_single_word",
    "this Phrase Is Half capitalized.",
    "This Phrase Is Already Capitalized!",
    "THIS SENTENCE IS IN FULL CAPS",
    "1 2 3 4 5 6 7 8 9 10"
   ];
   const result = [
    "The Brown Fox Leapt Over The Lazy Dog",
    "This Phrase Has Many Spaces !",
    "This_counts_as_a_single_word",
    "This Phrase Is Half Capitalized.",
    "This Phrase Is Already Capitalized!",
    "This Sentence Is In Full Caps",
    "1 2 3 4 5 6 7 8 9 10"
   ];

   for (let i = 0; i < test.length; i++) {
    expect(capitalize(test[i])).toBe(result[i]);
   }
})