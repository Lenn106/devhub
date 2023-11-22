// Cloak Handler
devhub.cloak = function(url, redirect) {
  window.open('about:blank').document.write(`<head><title>New Tab</title></head><body><style>body {margin: 0;}</style><iframe style="border: none;" src="${url}" width="100%" height="100%"></body>`);
  if (redirect) {
    window.location.href = redirect;
  }
};

// iFrame (fullscren) handler
devhub.frame = function(url) {
  document.documentElement.remove();
  let iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.width = window.innerWidth;
  iframe.height = window.innerHeight;
  document.appendChild(iframe);
};

// Proxy Opener
devhub.openProxy = function(urlToProxy) {
  alert("This website is a demo of DevHub, this proxy is not currently working to prevent blockers from scanning this page.")
  localStorage.setItem("url", urlToProxy);
  location.href = "/devhub/load.html";
};

// Custom console.log
devhub.log = function(data) {
  console_log("%c[DevHub]%c", "color: purple; font-weight: bold", "", data);
};
// console.log override
console_log = console.log;
console.log = devhub.log;

// Custom console.error
devhub.error = function(data) {
  console_error("%c[DevHub]%c", "color: orange; font-weight: bold", "", data);
};
// console.error override
console_error = console.error;
console.error = devhub.error;
