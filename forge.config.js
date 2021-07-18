module.exports = async () => {
    const config = {
        "packagerConfig": {},
        "makers": [
            {
                "name": "@electron-forge/maker-squirrel",
                "config": {
                    "name": "beatstar"
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
        ]
    }
return config;
}