const click = (clazz) => {
  const buttons = document.getElementsByClassName(clazz);
  for (const button of buttons) {
    button.click();
    console.log('No More Ad');
  }
};

setInterval(() => {
  click('ytp-ad-overlay-close-container');
  click('ytp-ad-skip-button');
}, 1000);

console.log('No More Ad - Init');
