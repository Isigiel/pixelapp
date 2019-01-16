const jetpack = require('fs-jetpack');

// "copyfiles src/_redirects dist/pixelday --flat && copyfiles src/manifest.de.json dist/pixelday/de --flat && copyfiles src/manifest.en.json dist/pixelday/en --flat"

jetpack.copy('src/_redirects', 'dist/pixelday/_redirects', {overwrite: true});
jetpack.copy('src/manifest.de.json', 'dist/pixelday/de/manifest.json', {overwrite: true});
jetpack.copy('src/manifest.en.json', 'dist/pixelday/en/manifest.json', {overwrite: true});
