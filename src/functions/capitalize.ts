export function capitalize(text: string) : string {
    let words = text.replaceAll(/\s{2,}/g, " ").split(" ");

    console.log(words);
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            words[i] = `${words[i][0].toUpperCase()}${words[i].slice(1).toLowerCase()}`;
        }
    }

    console.log(words);
    
    return words.join(" ");
}