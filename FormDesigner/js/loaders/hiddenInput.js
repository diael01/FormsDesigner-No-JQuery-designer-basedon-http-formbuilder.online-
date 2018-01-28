function loadHiddenInputHtml() {
            var cn = createCommonNodes();

            cn.li.className = "hidden-field form-field";
            cn.li.type = "hidden";
            var name = "frmb-0-fld-8";
            cn.li.id = name;
            cn.label.textContent = "hidden-input";
            cn.label.style = "display:none;";
                 
            var label = document.createElement("label");
            cn.prevHolder.appendChild(label);
            label.textContent = "Hidden Input";

            var input = document.createElement("input");
            cn.prevHolder.appendChild(input);           
            input.type = "hidden";
            input.className = "hidden-input";
            input.setAttribute("name", "hidden-1489965735880-preview");
            input.id = "hidden-1489965735880-preview";

            createCommonHolders();
}

