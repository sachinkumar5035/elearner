import DataUriParser from 'datauri/parser.js';
import path from 'path';


const getDataUri = (file)=>{
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    const baseFile = parser.format(extName,file.buffer);
    return baseFile;
}


export default getDataUri;