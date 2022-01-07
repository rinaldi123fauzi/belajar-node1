const buffer = Buffer.from("Rinaldi Fauzi", "utf8")

console.info(buffer.toString())
console.info(buffer.toString("hex"))
console.info(buffer.toString("base64"))

const bufferBase64 = Buffer.from("UmluYWxkaSBGYXV6aQ==", "base64")


console.info(bufferBase64.toString("utf8"))
