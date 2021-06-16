module.exports = {
    packagerConfig: {},
    makers: [
        /**
         * Darwin/macOS
         * 
         * https://www.electronforge.io/config/makers/dmg
         */
        {
            name: '@electron-forge/maker-dmg',
            config: {
                format: 'ULFO'
            },
        },
        /**
         * Linux
         * 
         * https://www.electronforge.io/config/makers/deb
         * https://www.electronforge.io/config/makers/rpm
         */
        {
            name: "@electron-forge/maker-deb",
        },
        {
            name: "@electron-forge/maker-rpm",
        },
        /**
         * Windows
         * 
         * https://www.electronforge.io/config/makers/squirrel.windows
         */
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                // The path to an Authenticode Code Signing Certificate.
                // certificateFile: './cert.pfx',
                // The password to decrypt the certificate given in certificateFile.
                // certificatePassword: 'this-is-a-secret'
            },
        },
        /**
         * Zip
         * 
         * https://www.electronforge.io/config/makers/zip
         */
        {
            name: '@electron-forge/maker-zip',
        },
    ],
    plugins: [
        [
            '@electron-forge/plugin-webpack',
            {
            mainConfig: './webpack.main.config.js',
            renderer: {
                config: './webpack.renderer.config.js',
                entryPoints: [
                {
                    html: './src/front/climber/dist/index.html',
                    js: './src/front/renderer.js',
                    name: 'main_window'
                },
                {
                    html: './src/loader/index.html',
                    js: './src/loader/renderer.js',
                    name: 'loader_window'
                }
                ]
            }
            }
        ]
    ]
};
