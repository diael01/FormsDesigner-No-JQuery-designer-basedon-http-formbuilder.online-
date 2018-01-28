function loadSelectHtml() {
            var cn = createCommonNodes();

            cn.li.className = "select-field form-field";
            cn.li.type = "select";
            var name = "frmb-0-fld-12";
            cn.li.id = name;
            cn.label.textContent = "select";
            cn.label.style = "display:none;";

            var label = document.createElement("label");
            cn.prevHolder.appendChild(label);
            label.textContent = "Select";

            var select = document.createElement("select");
            cn.prevHolder.appendChild(select);
            select.type = "select";
            select.className = "form-control";
            select.setAttribute("name", "select-1489966109654-preview");
            select.id = "select-1489966109654-preview";

            var o1 = document.createElement("option");          
            var o2 = document.createElement("option");
            var o3 = document.createElement("option");
            o1.textContent = "Option 1";
            o2.textContent = "Option 2";
            o3.textContent = "Option 3";
            select.appendChild(o1);
            select.appendChild(o2);
            select.appendChild(o3);
            
            createCommonHolders();
}


