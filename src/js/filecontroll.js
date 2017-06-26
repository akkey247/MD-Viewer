import {remote} from 'electron';
import $ from 'jquery';
import marked from 'marked';
const fs = require('fs');
const Dialog = remote.dialog;
const browserWindow = remote.BrowserWindow;

$(function () {
  $('#fileSelect').click(() => {
    Dialog.showOpenDialog(null, {
      properties: ['openFile'],
      title: 'ファイル(単独選択)',
      defaultPath: '.',
      filters: [
        { name: 'MarkDownファイル', extensions: ['md'] }
      ]
    }, (fileNames) => {
      $("#title").text(fileNames);
      if (fileNames) {
        readFile(fileNames[0]);
      }
    });
  });
});

/**
 * テキストを読み込み、テキストをログに出力する
 */
function readFile(path) {
  fs.readFile(path, function (error, text) {
    if (error != null) {
      alert('error : ' + error);
      return;
    }
    $("#contents").html(marked(text.toString(), {sanitize: true}));
  });
}
