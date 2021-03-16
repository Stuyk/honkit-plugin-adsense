# Robots.txt Creator for Honkit

Generate a `robots.txt` for your Honkit Documentation. The output sitemap file is `robots.txt` and copied automatically.

## Install

```sh
npm install honkit-plugin-robots --save-dev
```

## Usage

Add it to your `book.json` with a basic configuration:

```json
{
    "plugins": ["honkit-plugin-robots"],
    "pluginsConfig": {
        "robots": {
            "data": ["User-agent: *", "Disallow:"]
        }
    }
}
```
