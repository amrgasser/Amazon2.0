
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIR = __dirname + '/public/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("storage.destination");
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        console.log("storage.filename");
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});
const upload = multer({
    dest: DIR,
    limits: 10000 * 1024 * 1024,
});

export default upload