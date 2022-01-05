const extensionURL = `http://github.com/xkeshav`;

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.runtime.setUninstallURL(extensionURL);
  }
  console.log('Ad SKIP installed successfully');
});
