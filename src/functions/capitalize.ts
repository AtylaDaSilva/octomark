/**
 * Converts the first letter of each word to upper case. Also removes extra spaces.
 * @param text The string to be capitalized
 * @returns string
 */
export function capitalize(text: string) : string {
    let words = text.replaceAll(/\s{2,}/g, " ").split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            words[i] = `${words[i][0].toUpperCase()}${words[i].slice(1).toLowerCase()}`;
        }
    }
    
    return words.join(" ");
}