function readFile(fileName: string): string {
    if (fileName === 'not exits!') {
        throw new Error(`file not exist ${fileName}`);
    }
    return 'file contents';
}

function closeFile(fileName: string) {

}


const fileName = 'not exits!';
try{
    console.log(readFile(fileName));
} catch (error) {
    console.log('catched');
    console.error(error);
} finally {
    closeFile(fileName);
    console.log('finally!!');
}

console.log("asd");