const PDFKit = require('pdfkit');
const fs = require('fs');
const path = require("path");

const pdf = new PDFKit();


pdf.image(path.join(__dirname, '../', 'img', 'icone.jpeg'), 10, 10)
pdf.text('Rodrigo Guedelho de Almeida', 180, 80);
pdf.text('Bacharel em sistemas de informação', 180, 100);
pdf.text('Pós graduando em Egenharia de software', 180, 120);
pdf.text('Desenvolvedor fullstack', 180, 140);

pdf.pipe(fs.createWriteStream(path.join(__dirname, '../', 'temp', 'output.pdf')));
pdf.end();