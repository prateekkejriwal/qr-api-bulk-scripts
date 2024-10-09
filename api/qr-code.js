const axios = require('axios')
const config = require('../config')


class QRCodeRequest {

    constructor(qrCodeConfig) {
        this.data = {}
        this.qrCodeConfig = qrCodeConfig
    }
    setId(id) { this.id = id }

    setData(key, value) {
        const qrCodeConfig = this.qrCodeConfig.isConfigField(key)
        if (qrCodeConfig) { qrCodeConfig.value = value }
        else
            this.data[key] = value
    }



    setQRCodeConfiguration(qrConfig) {
        this.qrCodeConfig = qrConfig
    }

    getQRCodeConfiguration() {
        return this.qrCodeConfig.getJSON();
    }
    getJSON() {
        return { branch_key: config.branchKey, qr_code_settings: this.getQRCodeConfiguration(), data: this.data }
    }

    async getQRCodeAsync() {
        const data = this.getJSON()
        const request = {
            url: 'https://api2.branch.io/v2/qr-code',
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(data),
            responseType: 'arraybuffer'
        }
        try {
            const response = await axios(request)
            return response.data
        } catch (exc) {
            console.log(exc);
        }

    }



}

class QRCodeConfig {

    constructor() {
        this.config = Object.assign({}, config.qrCodeSettings)
        for (const configKey in this.config) {
            const setterName = `set${configKey[0].toUpperCase() + configKey.slice(1)}`
            const getterName = `get${configKey[0].toUpperCase() + configKey.slice(1)}`
            const configField = this.config[configKey]
            this[setterName] = function (value) {
                if (value && this.checkValueFormat(value))
                    this.config[configKey].value = value
            }
            this[getterName] = function () {
                return this.config[configKey].value || configField.default
            }
        }
    }

    checkValueFormat(configField, value) {
        switch (configField.format) {
            case 'url':
                try { new URL(value) } catch (exc) { return false } return true; break;
            case 'string': return Object.getPrototypeOf(value) === String.prototype
            case 'integer': if (value >= configField.supportedValues[0] && value <= configField.supportedValues[1]) { return true };
            default: return false; break;
        }
    }

    getJSON() {
        const conf = {}
        for (const configKey in this.config) {
            const configField = this.config[configKey]
            const val = configField.value || configField.default
            if (val) {
                conf[configField.key] = val
            }
        }
        return conf
    }

    isConfigField(key) {
        return Object.values(this.config).find(x => {
            return x.key === key
        })
    }
}

module.exports = { QRCodeConfig, QRCodeRequest }