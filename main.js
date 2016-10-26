const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

// Global reference to window object
// Without this, JS garbage collect would kill window
let mainWindow

function createWindow() {
	mainWindow = new BrowserWindow({width: 800, height: 600})
	mainWindow.loadURL(`file://${__dirname}/index.html`)
	mainWindow.webContents.openDevTools()

	mainWindow.on('closed', function() {
		mainWindow = null		// dereference object
	})
}

// init the window when app starts
app.on('ready', createWindow)

app.on('window-all=closed', function() {
	if(process.platform !== 'darwin') {		// workaround for OS X command bar
		app.quit()
	}
})

app.on('activate', function() {
	if (mainWindow === null) {		// workaround for OS X command bar ro re-create window
		createWindow()
	}
})

require('electron-reload');