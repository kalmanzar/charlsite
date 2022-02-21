# charlsite

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Netlify Deploy

```bash
# install dependencies (if not done already)
$ npm install

# generate dist dir
$ npm run generate

# deploy draft site
$ netlify deploy

# deploy prod site
$ netlify deploy --prod
```

## Image Conversion/Resizing
```bash
$ magick convert "$i" -resize WxH "$filename".png
# B/W or grayscale use the following -define
$ magick convert "$i" -resize WxH -define png:color-type=6 "$filename".png
$ cwebp -q 85 "$i" -o "$filename-Full".webp
```
