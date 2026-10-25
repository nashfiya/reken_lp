const fs = require('fs');

// 1. index.html
let index = fs.readFileSync('index.html', 'utf8');
index = index.replace('Zero Double-Booking', 'Bebas Bentrok');
fs.writeFileSync('index.html', index, 'utf8');
console.log('Fixed Zero Double-Booking in index.html');

// 2. fitur.html
let fitur = fs.readFileSync('fitur.html', 'utf8');
fitur = fitur.replace('<span>30 Automated Test Suites (Lulus 100%)</span>', '<span>Uji Sistem</span>');
fitur = fitur.replace('<span>Multi-Tenant Data Encryption</span>', '<span>Proteksi Ganda</span>');
fitur = fitur.replace('<span>Audit-Ready Financial Lock</span>', '<span>Kas Terkunci</span>');
fs.writeFileSync('fitur.html', fitur, 'utf8');
console.log('Fixed 3 badges in fitur.html');
