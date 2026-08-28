import fs from 'fs';
import path from 'path';

const prodDir = './production';
const files = fs.readdirSync(prodDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(prodDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/<html lang="en">/g, '<html lang="pt-BR">');
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log(`Updated ${files.length} files to lang="pt-BR"`);
