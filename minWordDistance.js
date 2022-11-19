const {distance, closest} = require('fastest-levenshtein')
function fixPhonetics (txt) {
txt = txt.toLowerCase()
txt = txt.replace(/ch/g, "cc") // be aware of "h" => ""
txt = txt.replace(/ge/g, "je") // be aware of "gue" => "ge"
txt = txt.replace(/gi/g, "ji") // be aware of "gui" => "gi"
// Up to here order matters
txt = txt.replace(/h/g, "")
txt = txt.replace(/v/g, "b")
txt = txt.replace(/ka/g, "ca")
txt = txt.replace(/se/g, "ce")
txt = txt.replace(/ze/g, "ce")
txt = txt.replace(/si/g, "ci")
txt = txt.replace(/zi/g, "ci")
txt = txt.replace(/ko/g, "co")
txt = txt.replace(/ku/gi, "cu")
txt = txt.replace(/gue/g, "ge")
txt = txt.replace(/gui/g, "gi")
txt = txt.replace(/gü/g, "gu")
txt = txt.replace(/y/g, "i")
txt = txt.replace(/ll/g, "i")
txt = txt.replace(/que/g, "ke")
txt = txt.replace(/qui/g, "ki")
txt = txt.replace(/za/g, "sa")
txt = txt.replace(/zo/g, "so")
txt = txt.replace(/zu/g, "su")
txt = txt.replace(/ñ/g, "n") // ummm
txt = txt.replace(/á/g, "a")
txt = txt.replace(/é/g, "e")
txt = txt.replace(/í/g, "i")
txt = txt.replace(/ó/g, "o")
txt = txt.replace(/ú/g, "u")
return txt
}

let txt1 = 'una aplicación escrita en país y basada en redes neuronales que reconoce palabras en varios idiomas y que funciona de forma independiente por lo que instala servidor cargas en diccionario idioma que deseas lo ejecutas y ya hasta el puerto listo para enviarle el audio' ;
let txt2 = 'una aplicación escrita en python y basada en redes neuronales que reconoce palabras en varios idiomas y que funciona de forma independiente por lo que instalas servidor cargas en diccionario del idioma que deseas lo ejecutas y ya está el puerto listo para enviarle el audio';

const initialDistance = distance(txt1 ,txt2)

txtMd1 = fixPhonetics(txt1)
txtMd2 = fixPhonetics(txt2)

const minimizedDistance = distance(txtMd1 ,txtMd2)
console.print ("initialDistance: ",initialDistance, "minimizedDistance: ",minimizedDistance)
