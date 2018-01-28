function loadFileUploadHtml() {
            var cn = createCommonNodes();

            cn.li.className = "file-field form-field";
            cn.li.type = "file";
            var name = "frmb-0-fld-6";
            cn.li.id = name;
            cn.label.textContent = "file";
            cn.label.style = "display:none;";

            var label = document.createElement("label");
            cn.prevHolder.appendChild(label);
            label.textContent = "File Upload";

            var input = document.createElement("input");
            cn.prevHolder.appendChild(input);

            input.type = "file";
            input.className = "form-control";
            input.setAttribute("name", "file-1489965108124-preview");
            input.id = "file-1489965108124-preview";

            createCommonHolders();
}

