const { app, BrowserWindow } = require('electron');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const url = isProduction ? path.join(__dirname, '/climber/dist/index.html') : 'http://localhost:4200';

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    });

    win.loadURL(url);
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});
