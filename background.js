
//chrome.action.setBadgeText({ text:'' });
chrome.action.setBadgeBackgroundColor({ color : 'green'});

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension is running!');
});

