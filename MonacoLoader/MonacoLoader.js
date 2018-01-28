'use strict';
require.config({
    baseUrl: 'http://localhost:54310/Scripts/monaco-editor/min/'
});
var editor = null, diffEditor = null, MODES = null;
require(['vs/editor/editor.main'], function () {
    MODES = (function () {
        //var modesIds = monaco.languages.getLanguages().map(function (lang) { return lang.id; });       
        var modesIds = [];
        modesIds[0] = "typescript";
        modesIds[1] = "json";
        modesIds[2] = "javascript";
        modesIds[3] = "html";
        modesIds[4] = "xml";
        modesIds[5] = "sql";
        modesIds[6] = "css";
        modesIds[7] = "java";
        modesIds[8] = "csharp";
        return modesIds.map(function (modeId) {
            return {
                modeId: modeId,
                sampleURL: 'http://localhost:54310/Scripts/monaco-editor/index/samples/sample.' + modeId + '.txt'
            };
        });
    })();
    var x = document.getElementById("languagePicker");
    for (var i = 0; i < MODES.length; i++) {
        var o = document.createElement('option');
        o.textContent = MODES[i].modeId;
        x.add(o);
    }
    loadSample(MODES[0]);
});
window.onresize = function () {
    if (editor) {
        editor.layout();
    }
    if (diffEditor) {
        diffEditor.layout();
    }
};
function loadSample(mode) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', mode.sampleURL);
    xhr.onload = function () {
        if (xhr.status === 200) {
            if (!editor) {
                var doc = document.getElementById('editor');
                doc.value = "";
                editor = monaco.editor.create(doc, {
                    model: null,
                });
            }
            var oldModel = editor.getModel();
            var newModel = monaco.editor.createModel(xhr.responseText, mode.modeId);
            editor.setModel(newModel);
            if (oldModel) {
                oldModel.dispose();
            }
        }
        else {
            if (editor) {
                if (editor.getModel()) {
                    editor.getModel().dispose();
                }
                editor.dispose();
                editor = null;
            }
            document.getElementById('editor').value = '<p class="alert alert-error">Failed to load ' + mode.modeId + ' sample</p>';
        }
    };
    xhr.send();
}
function changeLanguage() {
    var x = document.getElementById("languagePicker").value;
    var o;
    for (var i = 0; i < MODES.length; i++) {
        o = MODES[i];
        if (o.modeId === x)
            break;
    }
    loadSample(o);
}
function changeThemeUI() {
    var x = document.getElementById("themePicker").value;
    changeTheme(x);
}
function changeTheme(theme) {
    var newTheme = (theme === 'Visual Studio Dark' ? 'vs-dark' : (theme === 'Visual Studio' ? 'vs' : 'hc-black'));
    if (editor) {
        editor.updateOptions({ 'theme': newTheme });
    }
    if (diffEditor) {
        diffEditor.updateOptions({ 'theme': newTheme });
    }
}
