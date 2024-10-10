const fs = require('fs')
const config = require('./config')
const { QRCodeConfig, QRCodeRequest } = require('./api/qr-code')

function readCSV(filepath) {
    const data = fs.readFileSync(filepath).toLocaleString().trim()
    return data.split('\n').map(x => { return x.split(',').map(y => { return y[0] === "\"" ? y.slice(1, y.length - 1) : y }) })
}

async function createQRCodes(qrInput) {
    const headers = qrInput[0]
    qrInput = qrInput.slice(1)
    const qrCodeConfig = new QRCodeConfig()
    for (const row of qrInput) {
        if (headers.length !== row.length) continue
        const qrRequest = new QRCodeRequest()
        let id = undefined
        qrRequest.setQRCodeConfiguration(qrCodeConfig)
        for (const headerIndex in headers) {
            const header = headers[headerIndex]
            const data = row[headerIndex]
            id = header === config.qrIdentifier ? data : id
            if (data)
                qrRequest.setData(header, data)
        }
        log(`Sending a request to create a QR code`)
        log(JSON.stringify(qrRequest.getJSON()))
        const qrCode = await qrRequest.getQRCodeAsync()
        fs.writeFileSync(`./qr-codes/${id}.${config.qrCodeSettings.imageFormat.default}`, qrCode)
    }
}

function log(data) {
    fs.appendFileSync('./logs.txt', `${new Date().toISOString()}\t${data}\n`)
}

createQRCodes(readCSV(config.inputCSVFile))