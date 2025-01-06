import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener la ruta absoluta actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Configurar almacenamiento
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("Ruta de destino: ", path.join(__dirname, 'src','public', 'img', 'products'));
        console.log(file.originalname)
        cb(null, 'src/public/img/products'); // Ruta donde guardar imágenes
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}-${file.originalname}`;
        cb(null, uniqueSuffix);
    }
});

// Filtro de archivos (solo imágenes)
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const isValidExt = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const isValidMime = allowedTypes.test(file.mimetype);

    if (isValidExt && isValidMime) {
        cb(null, true);
    } else {
        cb(new Error('Only .jpeg, .jpg, and .png files are allowed!'));
    }
};

// Configurar multer
export const upload = multer({ storage });