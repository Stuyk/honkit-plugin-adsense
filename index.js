function handleBefore(page) {
    const client = this.config.get('pluginsConfig.adsense.client');
    const slot = this.config.get('pluginsConfig.adsense.slot');

    if (!client || !slot) {
        return page;
    }

    page.content +=
        '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="' +
        client +
        '" data-ad-slot="' +
        slot +
        '"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';

    return page;
}

module.exports = {
    hooks: {
        'page:before': handleBefore,
    },
};
