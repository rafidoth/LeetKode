const fs = require('fs/promises');
const path = require('path');

const directoryPath = './'; // Replace with the actual directory path

const intro = '# Welcome to LeetKode'
const disclaimer= '_**Disclaimer:** All the solutions provided in this repo are given by me. They are not guaranteed to be 100% correct or highly efficient. Please use them as a starting point and do your own testing and debugging. You can also take help from other sources to make your code more efficient._'

let content = intro+ '\n' + disclaimer + '\n\n\n'



const aux = async ()=>{
    const files = await fs.readdir(directoryPath, (err, files) => {
        if (err) {
          console.error('Error reading directory:', err);
          return;
        }
        console.log("inside"+content)
        console.log('Extraction completed!');
      })

    for(const file of files){
        const fileName = path.parse(file).name
        const fileExt = path.parse(file).ext
        if(fileExt === '.js' && Number(fileName)){
            const filePath = path.join(directoryPath,file);
            const fileContent = await fs.readFile(filePath, 'utf-8')
  
            const regexForTitle = /\/\/t:([\s\S]*?)\\/g;
            let title = fileContent.match(regexForTitle).map(t=>{
                t=t.replace('//t:','')
                t=t.replace('\\','')
                return t;
            })[0]
    
            const regexForLink = /\/\/l:([\s\S]*?)\\/g;
            let link = fileContent.match(regexForLink).map(t=>{
                t=t.replace('//l:','')
                t=t.replace('\\','')
                return t;
            })[0]
            content= content + '['+ title +']'+'('+ link+')' +'\n'

            const regexForCode = /\/\/cs([\s\S]*?)\/\/ce/g;
            let matchedCodes= fileContent.match(regexForCode);
            const codes = matchedCodes.map(code=>{
                code = code.replace('//cs','')
                code = code.replace('//ce','')
                return '```javascript'+code+ '```'
            })
            for(const code of codes){
                content = content+ '\n'+ code+'\n\n'
            }
        }
    }
    await fs.writeFile('output.md',content)
    console.log(content)
}
aux()
  