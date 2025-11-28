const fs = require('fs');
const path = './dist/404.html';
const index = './dist/index.html';

if (fs.existsSync(index)) {
  let html = fs.readFileSync(index, 'utf8');

  const redirectScript = `
  <script>
    const newUrl = "https://marcserranog.github.io/fakeflix/#/";
    if (!location.hash) location.replace(newUrl);
  </script>
  `;

  // Inserta el script justo después de <head>
  html = html.replace('<head>', `<head>${redirectScript}`);

  fs.writeFileSync(path, html, 'utf8');
  console.log("⚡ 404.html generado con redirect automático ✓");
} else {
  console.log("No existe dist/index.html — ejecuta `npm run build` antes.");
}
