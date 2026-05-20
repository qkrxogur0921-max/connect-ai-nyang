const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'extension.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace "Connect AI" with "NYANG AI"
content = content.replace(/Connect AI/g, 'NYANG AI');
// Replace "connect-ai" with "nyang-ai"
content = content.replace(/connect-ai/g, 'nyang-ai');

fs.writeFileSync(filePath, content);
console.log('Replaced successfully');
