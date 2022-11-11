
const url = 'https://jsonplaceholder.typicode.com/todos/1'
const response = await fetch(url)
const data = await response.json()
await Deno.writeFile('data.json', new TextEncoder().encode(JSON.stringify(data)) )
