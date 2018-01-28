function loadCheckboxHtml() {
            var cn = createCommonNodes();

            cn.li.className = "checkbox-field form-field";
            cn.li.type = "checkbox";
            var name = "frmb-0-fld-3";
            cn.li.id = name;
            cn.label.textContent = "checkbox";
            cn.label.style = "display:none;";

            var label = document.createElement("label");
            cn.prevHolder.appendChild(label);
            label.textContent = "Checkbox";         

            var input = document.createElement("input");
            cn.prevHolder.appendChild(input);
            input.type = "checkbox";
            input.className = "checkbox";
            input.setAttribute("name","checkbox-1489964828941-preview");
            input.id = "checkbox-1489964828941-preview";           

            createCommonHolders();
}

