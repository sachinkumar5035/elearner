import multer from 'multer';

const storage = multer.memoryStorage();
// from frontend we need to send image with the same name as file
const singleUpload = multer({storage}).single("file"); // name "file" should be same as we are recieving in course route


export default singleUpload;