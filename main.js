const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 700,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'icon.png') // opcional si tenés un ícono personalizado
  });

  win.loadFile('index.html');
  win.setMenu(null); // Quitar menú superior

  // Estilo futurista con título personalizado
  win.setTitle("Bitácora 16D - AURELION-Φ");
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});