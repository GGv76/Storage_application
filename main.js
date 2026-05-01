const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "GG-Drive",
    // These settings ensure localStorage and your vanilla JS work smoothly
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Load your index.html file
  win.loadFile('index.html');

  // Optional: Open the DevTools for debugging
  // win.webContents.openDevTools();
}

// This method is called when Electron has finished initialization
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});