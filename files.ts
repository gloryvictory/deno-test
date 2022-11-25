// export DENO_INSTALL="/home/codespace/.deno"
// export PATH="$DENO_INSTALL/bin:$PATH"
// Run '/home/codespace/.deno/bin/deno --help' to get started



const decoder = new TextDecoder('utf-8')
const data = await Deno.readfile('./LICENSE')
console.log(decoder.decode(data));

const encoder = new TextEncoder();
const newText = 'New text to write to file';

await Deno.writeFile('./newtextfile.txt',encoder.encode(newText));

await Deno.writeTextFile('./newtextfile.txt',newText);

const renameConfirmation = confirm('Do you whant to rename the file');

const textFile = './newtextfile.txt'

if(renameConfirmation){

    await Deno.rename('./newtextfile.txt', './newtextfile-renamed.txt');

}else{
    console.log(`file ${textFile} not renamed`);
}