import multer from 'multer';

const storage = multer.memoryStorage();

const singleUpload = multer({storage}).single("file"); // name "file" should be same as we are recieving in course route


export default singleUpload;