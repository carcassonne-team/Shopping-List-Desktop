const {app, BrowserWindow, ipcMain} = require('electron')
const url = require("url");
const path = require("path");

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1980,
    height: 1080,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true
    }
  })


  mainWindow.loadURL(path.join(__dirname, 'dist/index.html'))

  mainWindow.removeMenu()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

ipcMain.on('openModal', (event, arg) => {
  openModal()
})

function openModal() {
  const {BrowserWindow} = require('electron');
  let modal = new BrowserWindow({
    parent: mainWindow,
    modal: true,
    show: false
  })
  modal.loadURL('https://www.sitepoint.com')
  modal.once('ready-to-show', () => {
    modal.show()
  })
}

