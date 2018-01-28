function loadHeaderHtml() {
            var cn = createCommonNodes();

            cn.li.className = "header-field form-field";
            cn.li.type = "header";
            cn.li.id = "frmb-0-fld-7";
            cn.label.textContent = "header";
            cn.label.style = "display:none;";

            var label = document.createElement("label");
            cn.prevHolder.appendChild(label);
            label.textContent = "Header";

            var hd = document.createElement("h1");
            hd.className = "header";
            hd.type = "h1";
            hd.setAttribute("name", "undefined preview");
            hd.id = "undefined preview";
            hd.textContent = "Header";
            cn.prevHolder.appendChild(hd);

            createCommonHolders();
}

