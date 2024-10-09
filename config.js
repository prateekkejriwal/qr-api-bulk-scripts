module.exports = {
    branchKey: "key_live_jgVWl5JScwaIjvQvh4XXXXXXXXXXX",
    inputCSVFile: './input.csv',
    qrIdentifier: "id",
    outputFolder: './qr-codes',
    qrCodeSettings: {
        "imageFormat": {
            description: `Hex color value of the finder eye as per the https://htmlcolorcodes.com/`,
            format: "string",
            supportedValues: ['jpg', 'jpeg,', 'png'],
            key: "image_format",
            default: 'png'
        },
        "centerLogoUrl": {
            description: `URL to the image you want as a center logo e.g. “https://cdn.branch.io/branch-assets/00000000-og_image.png”`,
            format: "url",
            supportedValues: [],
            key: "center_logo_url",
            default: undefined

        },
        "width": {
            description: `Hex color value of the finder eye as per the https://htmlcolorcodes.com/`,
            format: "integer",
            supportedValues: [300, 2000],
            key: "width",
            default: 300
        },
        "margin": {
            description: `The number of pixels you want for the margin. Min 1px. Max 20px.`,
            format: "integer",
            supportedValues: [1, 20],
            key: "margin",
            default: 1
        },
        "codeColor": {
            description: `THex color value of the QR Code itself as per the https://htmlcolorcodes.com/`,
            format: "string",
            supportedValues: [],
            key: "code_color",
            default: undefined
        },
        "backgroundColor": {
            description: `Hex color value of the background of the QR code itself as per the https://htmlcolorcodes.com/`,
            format: "string",
            supportedValues: [],
            key: "background_color",
            default: undefined
        },
        "finderPattern": {
            description: `The finder pattern refers to the shape seen in the top left, top right, and bottom left of a QR-Code. Users can now choose between a square, a rounded square, or a circle. 1 = square, 2 = rounded rectangle, 3 = circle`,
            format: "integer",
            supportedValues: [1, 2, 3],
            key: "finder_pattern",
            default: 1
        },
        "codePattern": {
            description: `Instead of the generic/standard QR-Code pattern we’re used to seeing, customers can now use (1) standard, (2) squares, (3) circles, (4) triangles, (5) diamonds, (6) hexagons, and (7) octagons.`,
            format: "string",
            supportedValues: [1, 2, 3, 4, 5, 6, 7],
            key: "code_pattern",
            default: 1
        },
        "finderPatternColor": {
            description: `Hex color value of the Finder Pattern as per the https://htmlcolorcodes.com/`,
            format: "string",
            supportedValues: [],
            key: "finder_pattern_color",
            default: undefined

        },
        "backgroundImageUrl": {
            description: `We can lay the QR-Code on top of a background image. Users can send a background_image_opacity to adjust how visible and prominent the background image is.`,
            format: "url",
            supportedValues: [],
            key: "background_image_url",
            default: undefined

        },
        "backgroundImageOpacity": {
            description: `The opacity percentage of the background image.`,
            format: "integer",
            supportedValues: [1, 99],
            key: "background_image_opacity",
            default: undefined

        },
        "codePatternUrl": {
            description: `Direct link to an image to be used as the code-pattern itself on the QR Code.`,
            format: "url",
            supportedValues: [],
            key: "code_pattern_url",
            default: undefined

        },
        "finderEyeColor": {
            description: `Hex color value of the finder eye as per the https://htmlcolorcodes.com/`,
            format: "string",
            supportedValues: [],
            key: "finder_eye_color",
            default: undefined

        },


    }
}