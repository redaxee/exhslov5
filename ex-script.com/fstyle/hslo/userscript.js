// ==UserScript==
// @name         HSLO + NelBots + OpBots + AgarbotOvh
// @description  HSLO + Bots
// @version      9.0
// @author       test114514
// @match        *://agar.io/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @updateURL    https://ex-script.com/fstyle/hslo/userscript.js
// @run-at       document-start
// @grant        none
// ==/UserScript==

if (location.host === 'agar.io' && location.href !== 'https://agar.io/hslo') {
  location.href = 'https://agar.io/hslo';
  return;
}

const HSLO = new class {
  constructor() {
    this.method = 'GET';
    this.URL = 'https://ex-script.com/fstyle/hslo/';
    this.HTML = ``;
    this.date = Date.now();
  }

  load() {
    this.setMessage();
    this.fetch();
  }

  setMessage() {
    document.body.innerHTML = "LOADING...";
  }

  fetch() {
    const request = new XMLHttpRequest();
    request.open(this.method, this.URL, true);
    request.onload = () => {
      this.HTML = request.responseText;
      this.write();
    };
    request.onerror = () => {
      document.body.innerHTML = "<div style='width: 100%; text-align: center; font-size: 24px; font-family: sans-serif;'>Failed to fetch HSLO files.</div>";
    }
    request.send();
  }
    replace(hello) {
        return hello;
    }

  write() {
    document.open();
    document.write(this.replace(this.HTML));
    document.close();
  }
}
window.botScript = 'Nel';
HSLO.load();
