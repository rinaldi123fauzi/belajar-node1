import dns from "dns/promises"

const address = await dns.lookup("rfc.pgn-solution.co.id")
console.info(address.address)
console.info(address.family)