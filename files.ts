const decoder = new TextDecoder('utf-8')
const data = await Deno.readfile('./LICENSE')
console.log(decoder.decode(data));

