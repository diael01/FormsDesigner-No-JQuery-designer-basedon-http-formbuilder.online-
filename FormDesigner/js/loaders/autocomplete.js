function loadAutocompleteHtml() {
           var cn = createCommonNodes();

            cn.li.className = "autocomplete-field form-field";
            cn.li.type = "autocomplete";
            var name = "frmb-0-fld-1";
            cn.li.id = name;
            cn.label.textContent = "autocomplete";
            cn.label.style = "display:none;";
          
            var label = document.createElement("label");
            cn.prevHolder.appendChild(label);
            label.textContent = "Autocomplete";
            var phInput = document.createElement("input");
            phInput.type = "autocomplete";
            phInput.clasName = "autocomplete";
            phInput.name = "autocomplete-preview;"
            cn.prevHolder.appendChild(phInput);
                                    
            createCommonHolders();

}


