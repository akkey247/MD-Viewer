import {remote} from 'electron';
import $ from 'jquery';
const Dialog = remote.dialog;
const browserWindow = remote.BrowserWindow;

$(function () {
  alert('test');
  $('#fileSelect').click(() => {
    Dialog.showOpenDialog(null, {
      properties: ['openFile'],
      title: 'ファイル(単独選択)',
      defaultPath: '.',
      filters: [
        { name: 'テキストファイル', extensions: ['txt'] },
        { name: 'JSONファイル', extensions: ['json'] }
      ]
    }, (fileNames) => {
      console.log(fileNames);
    });
  });
});