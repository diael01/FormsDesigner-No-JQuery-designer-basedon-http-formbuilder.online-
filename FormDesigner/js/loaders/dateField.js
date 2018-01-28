function loadDateFieldHtml() {
            var cn = createCommonNodes();

            cn.li.className = "date-field form-field";
            cn.li.type = "date";
            var name = "frmb-0-fld-5";
            cn.li.id = name;
            cn.label.textContent = "date";
            cn.label.style = "display:none;";

            var label = document.createElement("label");
            cn.prevHolder.appendChild(label);
            label.textContent = "Date Field";

            var input = document.createElement("input");
            cn.prevHolder.appendChild(input);

            input.type = "date";
            input.className = "form-control";
            input.setAttribute("name", "date-1489965048949-preview");
            input.id = "date-1489965048949-preview";

            createCommonHolders();
}

