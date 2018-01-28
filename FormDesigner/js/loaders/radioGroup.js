function loadRadioGroupHtml() {
            var cn = createCommonNodes();

            cn.li.className = "radio-group-field form-field";
            cn.li.type = "radio-group";
            var name = "frmb-0-fld-11";
            cn.li.id = name;
            cn.label.textContent = "radio-group";
            cn.label.style = "display:none;";

            var label = document.createElement("label");
            cn.prevHolder.appendChild(label);
            label.textContent = "Radio Group";

            var div = document.createElement("div");
            cn.prevHolder.appendChild(div);
            div.className = "checkbox-group";

            var input1 = document.createElement("input");
            input1.type = "radio";
            input1.className = "radio-group";
            input1.setAttribute("name", "radio-group-1489964828941-preview");
            input1.id = "radio-group-1489964828941-preview-1";
            div.appendChild(input1);
            var label1 = document.createElement("label");
            label1.htmlFor = "radio-group-1489964828941-preview";
            label1.className = "radio-group-label";
            label1.textContent = "Option 1 ";
            div.appendChild(label1);
            br1 = document.createElement("br");
            div.appendChild(br1);


            var input2 = document.createElement("input");
            input2.type = "radio";
            input2.className = "radio-group";
            input2.setAttribute("name", "radio-group-1489964828941-preview");
            input2.id = "radio-group-1489964828941-preview-2";
            div.appendChild(input2);
            var label2 = document.createElement("label");
            label2.htmlFor = "radio-group-1489964828941-preview";
            label2.className = "radio-group-label";
            label2.textContent = "Option 2 ";
            div.appendChild(label2);
            br2 = document.createElement("br");
            div.appendChild(br2);


            var input3 = document.createElement("input");
            input3.type = "radio";
            input3.className = "radio-group";
            input3.setAttribute("name", "radio-group-1489964828941-preview");
            input3.id = "radio-group-1489964828941-preview-3";
            div.appendChild(input3);
            var label3 = document.createElement("label");
            label3.htmlFor = "radio-group-1489964828941-preview";
            label3.className = "radio-group-label";
            label3.textContent = "Option 3 ";
            div.appendChild(label3);

            createCommonHolders();
}

