# Google Adsense for Honkit

Generate a adsense tag and place an ad at the bottom of your page.

## Install

```sh
npm install honkit-plugin-adsense --save-dev
```

## Usage

Add it to your `book.json` with a basic configuration:

```json
{
    "plugins": ["honkit-plugin-adsense"],
    "pluginsConfig": {
        "adsense": {
            "client": "client token",
            "slot": "slot token"
        }
    }
}
```
