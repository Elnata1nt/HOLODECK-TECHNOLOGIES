const multer = require('multer');
const path = require('path');

// Configuração do armazenamento de arquivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Diretório onde os arquivos serão armazenados
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Nome do arquivo
    }
});

// Middleware para fazer o upload de arquivos
const upload = multer({ storage: storage });

module.exports = upload;
