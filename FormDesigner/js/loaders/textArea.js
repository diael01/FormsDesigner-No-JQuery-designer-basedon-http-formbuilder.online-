function loadTextAreaHtml() {
            var cn = createCommonNodes();

            cn.li.className = "textarea-field form-field";
            cn.li.type = "textarea";
            var name = "frmb-0-fld-13";
            cn.li.id = name;
            cn.label.textContent = "textArea";
            cn.label.style = "display:none;";

            var label = document.createElement("label");
            cn.prevHolder.appendChild(label);
            label.textContent = "Text Area";

            var ta = document.createElement("textarea");
            cn.prevHolder.appendChild(ta);
            ta.type = "textarea";
            ta.className = "form-control";
            ta.setAttribute("name", "textarea-1489966244222-preview");
            ta.id = "textarea-1489966244222-preview";

            createCommonHolders();
}

