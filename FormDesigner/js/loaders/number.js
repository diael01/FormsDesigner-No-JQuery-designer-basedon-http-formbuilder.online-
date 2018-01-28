function loadNumberHtml() {
            var cn = createCommonNodes();

            cn.li.className = "number-field form-field";
            cn.li.type = "number";
            var name = "frmb-0-fld-9";
            cn.li.id = name;
            cn.label.textContent = "number";
            cn.label.style = "display:none;";

            var label = document.createElement("label");
            cn.prevHolder.appendChild(label);
            label.textContent = "Number";

            var input = document.createElement("input");
            cn.prevHolder.appendChild(input);
            input.type = "number";
            input.className = "form-control";
            input.setAttribute("name", "number-1490019727925-preview");
            input.id = "number-1490019727925-preview";

            createCommonHolders();
}

