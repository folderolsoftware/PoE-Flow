import webpack from 'webpack';
import { Metadata, userscriptMetadataGenerator } from 'userscript-metadata-generator';

const glob = require('glob');
const path = require('path');

const scripts = glob.sync('./src/**/*.user.ts');

const entry = scripts.reduce((acc: Record<string, string>, path: string) => {
    const entry = path.replace('.user.ts', '').substring(path.lastIndexOf('/') + 1);
    acc[entry] = path;
    return acc;
}, {})

const entryKeys = Object.keys(entry);
const metaFiles: Record<string, string> = {};

for (const key of entryKeys) {
    try {
        const metaFile: Metadata = require(path.resolve(__dirname, 'src', key, `${key}.meta.ts`));

        if (metaFile) {
            metaFiles[key] = userscriptMetadataGenerator(metaFile);
        }
    } catch {
        console.error(`No meta file found for ${key}!`)
    }
}

module.exports = {
    entry,
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    },
    optimization: {
        minimize: false,
    },
    output: {
        clean: true,
        filename: '[name].user.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: data => {
                const { name } = data.chunk;

                return (name && metaFiles[name]) ? metaFiles[name] : '';
            },
            entryOnly: true,
            raw: true
        })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}