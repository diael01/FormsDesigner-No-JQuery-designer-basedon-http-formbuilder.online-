function loadButtonHtml() {
            var cn = createCommonNodes();

            cn.li.className = "button-field form-field editing";
            cn.li.type = "button";
            var name = "frmb-0-fld-2";
            cn.li.id = name;
            cn.label.textContent = "button";
            cn.label.style = "display:none;";

            var label = document.createElement("label");
            cn.prevHolder.appendChild(label);
            label.textContent = "Button";

            var btn = document.createElement("button");
            btn.type = "button";
            btn.className = "button-input btn-default btn";
            btn.setAttribute("name", "button-preview");
            btn.id = "button-preview";
            btn.textContent = "Button";
            btn.style = "default";
            cn.prevHolder.appendChild(btn);

            createCommonHolders();
}

