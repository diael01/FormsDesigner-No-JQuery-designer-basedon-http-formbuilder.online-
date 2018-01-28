function loadTextFieldHtml() {
    //var xhr = new XMLHttpRequest();
    //xhr.open('GET', 'http://localhost:25178/controls/textfield.html');
    //xhr.onload = function () {
    //    if (xhr.status === 200) {

            var cn = createCommonNodes();

            cn.li.className = "text-field form-field";
            cn.li.type = "text";
            var name = "frmb-0-fld-14";
            cn.li.id = name;
            cn.label.textContent = "text";
            cn.label.style = "display:none;";

            var label = document.createElement("label");
            cn.prevHolder.appendChild(label);
            label.textContent = "Text Field";

            var input = document.createElement("input");
            cn.prevHolder.appendChild(input);
            input.type = "text";
            input.className = "form-control";
            input.setAttribute("name", "text-1489966174764-preview");
            input.id = "text-1489966174764-preview";

            createCommonHolders();

    //    }
    //    else {

    //        //document.getElementById('editor').value = '<p class="alert alert-error">Failed to load ' + mode.modeId + ' sample</p>';
    //    }
    //};
    //xhr.send();
}

