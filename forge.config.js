module.exports = {
    "packagerConfig": {},
    "makers": [
        {
            "name": "@electron-forge/maker-squirrel",
            "config": {
                "name": "audiogame"
            }
        },
        {
            "name": "@electron-forge/maker-zip",
            "platforms": [
                "darwin"
            ]
        },
        {
            "name": "@electron-forge/maker-deb",
            "config": {}
        },
        {
            "name": "@electron-forge/maker-rpm",
            "config": {}
        }
    ],
    plugins: [
        ['@electron-forge/plugin-webpack', {
            mainConfig: './webpack.main.config.js',
            renderer: {
                config: './webpack.renderer.config.js',
                entryPoints: [{
                    html: './src/electron/index.html',
                    js: './src/main.js',
                    name: 'audiogame',
                    nodeIntegration: true
                }]
            }
        }]
    ]

}