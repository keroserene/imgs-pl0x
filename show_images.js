// Periodically check and show images when necessary.
// keroserene@google.com

var SENDER_REGEX = /Always display images from (.*)@(.*)/
var REVEAL_DOMAINS = [
  'google.com'
].join('|');
var PERMA_REVEAL = false;   // 'Always Display' vs. just this once.
var CHECK_INTERVAL = 2000;  // Millisec

setInterval(function () {
  var box = document.getElementsByClassName('ado')[0];
  if (undefined === box)
    return;
  var showLink = box.children[2];
  var info = showLink.innerHTML.match(SENDER_REGEX);
  var domain = info[2];
  // Click on either 'Display images below' or 'Always dispay...' if desired.
  if (domain.match(REVEAL_DOMAINS)) {
    if (!PERMA_REVEAL)
      showLink = box.children[1];
    showLink.click();
  }
}, 2000);
