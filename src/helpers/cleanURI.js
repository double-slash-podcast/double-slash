// remove reserved caractere URI in string
export const cleanURI = str => str.replace(/[;,/?:@&=+$#]+/gi, '').trim();

// just encode clean and encode URI !
export const cleanAndEncodeURI = str => encodeURI(cleanURI(str));
