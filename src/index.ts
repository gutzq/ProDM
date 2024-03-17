import {app, ipcMain, BrowserWindow} from 'electron';
let mainWindow : BrowserWindow;
app.on('ready', createWindows);

function createWindows() {
  const mainWindow = new BrowserWindow({
        width: 800, height: 600,
        webPreferences: {
        preload: __dirname + "/preload.js"
        }
    });

    mainWindow.loadFile('./index.html');
    mainWindow.on("ready-to-show", () => mainWindow.show());
}
