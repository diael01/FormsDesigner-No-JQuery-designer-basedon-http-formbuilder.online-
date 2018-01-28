function loadCheckboxGroupHtml() {
            cn.li.className = "checkbox-group-field form-field";
            cn.li.type = "checkbox-group";
            var name = "frmb-0-fld-4";
            cn.li.id = name;
            cn.label.textContent = "checkbox-group";
            cn.label.style = "display:none;";

            var label = document.createElement("label");
            cn.prevHolder.appendChild(label);
            label.textContent = "Checkbox Group";

            var div = document.createElement("div");
            cn.prevHolder.appendChild(div);
            div.className = "checkbox-group";
                        
            var input1 = document.createElement("input");
            input1.type = "checkbox";
            input1.className = "checkbox";
            input1.setAttribute("name", "checkbox-group-1489964828941-preview");
            input1.id = "checkbox-group-1489964828941-preview-1";
            div.appendChild(input1);
            var label1 = document.createElement("label");
            label1.htmlFor = "checkbox-group-1489964828941-preview";
            label1.className = "checkbox-group-label";
            label1.textContent = "Option 1 ";
            div.appendChild(label1);
            br1 = document.createElement("br");
            div.appendChild(br1);
            
            
            var input2 = document.createElement("input");
            input2.type = "checkbox";
            input2.className = "checkbox";
            input2.setAttribute("name", "checkbox-group-1489964828941-preview");
            input2.id = "checkbox-group-1489964828941-preview-2";
            div.appendChild(input2);
            var label2 = document.createElement("label");
            label2.htmlFor = "checkbox-group-1489964828941-preview";
            label2.className = "checkbox-group-label";
            label2.textContent = "Option 2 ";
            div.appendChild(label2);
            br2 = document.createElement("br");
            div.appendChild(br2);

            
            var input3 = document.createElement("input");
            input3.type = "checkbox";
            input3.className = "checkbox";
            input3.setAttribute("name", "checkbox-group-1489964828941-preview");
            input3.id = "checkbox-group-1489964828941-preview-3";
            div.appendChild(input3);
            var label3 = document.createElement("label");
            label3.htmlFor = "checkbox-group-1489964828941-preview";
            label3.className = "checkbox-group-label";
            label3.textContent = "Option 3 ";
            div.appendChild(label3);
            
   
            createCommonHolders();
}

