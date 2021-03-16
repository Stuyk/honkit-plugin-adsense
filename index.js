function handleFinishHook() {
    let data = '';
    const robotsDataList = this.config.get('pluginsConfig.robots.data');

    for (let i = 0; i < robotsDataList.length; i++) {
        data += `${robotsDataList[i]}\r\n`;
    }

    return this.output.writeFile('robots.txt', data);
}

module.exports = {
    hooks: {
        finish: handleFinishHook, // Called after everything is completed.
    },
};
