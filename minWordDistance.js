const {distance, closest} = require('fastest-levenshtein')
let txt1 = 'una aplicación escrita en país y basada en redes neuronales que reconoce palabras en varios idiomas y que funciona de forma independiente por lo que instala servidor cargas en diccionario idioma que deseas lo ejecutas y ya hasta el puerto listo para enviarle el audio' ;
let txt2 = 'una aplicación escrita en python y basada en redes neuronales que reconoce palabras en varios idiomas y que funciona de forma independiente por lo que instalas servidor cargas en diccionario del idioma que deseas lo ejecutas y ya está el puerto listo para enviarle el audio';

const initialDistance = distance(txt1 ,txt2)

function fixPhonetics (txt) {
txt = txt.toLowerCase()
txt = txt.replace(/ch/gi, "cc")
txt = txt.replace(/ge/gi, "je")
txt = txt.replace(/gi/gi, "ji")
// Up to here order matters
txt = txt.replace(/h/gi, "")
txt = txt.replace(/v/gi, "b")
txt = txt.replace(/ka/gi, "ca")
txt = txt.replace(/se/gi, "ce")
txt = txt.replace(/ze/gi, "ce")
txt = txt.replace(/si/gi, "ci")
txt = txt.replace(/zi/gi, "ci")
txt = txt.replace(/ko/gi, "co")
txt = txt.replace(/ku/gi, "cu")
txt = txt.replace(/gue/gi, "ge")
txt = txt.replace(/gui/gi, "gi")
txt = txt.replace(/gü/gi, "gu")
txt = txt.replace(/y/gi, "i")
txt = txt.replace(/ll/gi, "i")
txt = txt.replace(/que/gi, "ke")
txt = txt.replace(/qui/gi, "ki")
txt = txt.replace(/za/gi, "sa")
txt = txt.replace(/zo/gi, "so")
txt = txt.replace(/zu/gi, "su")
txt = txt.replace(/ñ/gi, "n")
txt = txt.replace(/á/gi, "a")
txt = txt.replace(/é/gi, "e")
txt = txt.replace(/í/gi, "i")
txt = txt.replace(/ó/gi, "o")
txt = txt.replace(/ú/gi, "u")
return txt
}
txt1 = fixPhonetics(txt1)
txt2 = fixPhonetics(txt2)

const minimizedDistance = distance(txt1 ,txt2)
console.print ("initialDistance: ",initialDistance, "minimizedDistance: ",minimizedDistance)
