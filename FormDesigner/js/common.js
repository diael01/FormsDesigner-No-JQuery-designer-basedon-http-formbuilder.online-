var cn = {  
    parent: null,
    li: null,
    label: null,
    prevHolder: null,
    holder: null,
    fe: null
}

var cp = {
    type: null,

    required: null,
    label: null,    
    description: null,
    className: null,
    name: null,    
    value: null,
       
    subtype: null,   
    style: null,
    values: [],
   
}

var grpItem = {
    label: null,
    value: null,
    selected: null
}

areYouSure = function () {
    createModal("Are you sure you want to delete everything?", true);
}

//clear all staging  forms
function clearAll() {
    
    var staging = document.getElementById("frmb-0");
    var last;
    while (last = staging.lastChild) staging.removeChild(last);
    staging.innerHtml = "";

    var render = document.getElementById("render");
    while (last = render.lastChild) render.removeChild(last);
    render.innerHtml = "";
    closeModal();
}

//save staging forms
function saveStaging() {
    var staging = document.getElementById("bw");
    staging.style = "display:none;";
    var render = document.getElementById("render");
    render.style = "display:block";
    render.innerHtml = "";
    var prev = document.getElementsByClassName("prev-holder");

    for (var i = 0; i < prev.length; i++) {
        frmGroup = prev[i].children;
        for (var j = 0; j < frmGroup.length; j++) {
            if (!findExistingRenderElement(render, frmGroup[j])) {
                newelement = frmGroup[j].cloneNode(true);
                render.appendChild(newelement);
            }
        }
    }

    var elem2 = document.getElementById("btnEdit");
    if (elem2 === null) {
        var btnEdit = document.createElement("button");
        btnEdit.id = "btnEdit";
        btnEdit.textContent = "Edit Form";
        btnEdit.onclick = function () {
            var staging = document.getElementById("bw");
            staging.style = "display:block;";
            var render = document.getElementById("render");
            render.style = "display:none;";
        }
        render.appendChild(btnEdit);
    }
}

//find rendering element
function findExistingRenderElement(render, elem) {
    for (var k = 0; k < render.children.length; k++) {
        if (render.children[k].isEqualNode(elem))
            return true;
    }
    return false;
}

//show staging on click editForm
function showStaging() {
    var staging = document.getElementById("bw");
    staging.style = "display:block;";
    var render = document.getElementById("render");
    render.style = "display:none";
}


closeModal = function()
{
    var modal = document.getElementById('modalDialog');
    modal.style.display = "none";
}

toggleButtons = function(show)
{
    var yes = document.getElementById("yes");
    var no = document.getElementById("no");
    if (show) {
        yes.style = "display: block;";
        no.style = "display: block;";
    }
    else {
        yes.style = "display: none;";
        no.style = "display: none;";
    }
}

createModal = function(text, btnVisibility)
{
    var modal = document.getElementById('modalDialog');
    var btn = document.getElementById("frmb-0-view-data");
    var span = document.getElementsByClassName("close")[0];
    var p = document.getElementsByClassName("json")[0];
    p.textContent = text;
    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    toggleButtons(btnVisibility);
}

//view data as json
function viewData() {
    var allPh = document.getElementsByClassName("prev-holder");
    var json = generateJson(allPh);

    //display json
    createModal(json, false);
}

function createCommonNodes() {
    var parent = document.getElementById("frmb-0");
    var elem = document.createElement("li");
    parent.appendChild(elem);
    var subelem = ca("field-actions");

    elem.appendChild(subelem);
    var label = document.createElement("label");
    label.className = "field-label";
    elem.appendChild(label);
    var span = document.createElement("span");
    elem.appendChild(span);
    var prevHolder = ca("prev-holder");
    elem.appendChild(prevHolder);
    var holder = ca("frm-holder");
    elem.appendChild(holder);
    holder.style = "display: none;";

    var fe = ca("form-elements");
    holder.appendChild(fe);

    span.className = "required-asterisk";
    span.textContent = " *";

    cn.parent = parent;
    cn.li = elem;
    cn.label = label;
    cn.prevHolder = prevHolder;
    cn.holder = holder;
    cn.fe = fe;
    actionFields(subelem);
    return cn;
}


//create a div element 
function ca(cls) {
    var div = document.createElement("div");
    div.className = cls;
    return div;
}


//create common holders for for controls data
createCommonHolders = function()
{
    //form elements holder
    var fg1 = ca("form-group required-wrap");
    var fg2 = ca("form-group label-wrap");
    var fg3 = ca("form-group description-wrap");
    var fg4 = ca("form-group className-wrap");
    var fg5 = ca("form-group name-wrap");
    var fg6 = ca("form-group value-wrap");

    cn.fe.appendChild(fg1);
    cn.fe.appendChild(fg2);
    cn.fe.appendChild(fg3);
    cn.fe.appendChild(fg4);
    cn.fe.appendChild(fg5);
    cn.fe.appendChild(fg6);

    var iw1 = ca("input-wrap");
    fg1.appendChild(iw1);
    var iw2 = ca("input-wrap");
    fg2.appendChild(iw2);
    var iw3 = ca("input-wrap");
    fg3.appendChild(iw3);
    var iw4 = ca("input-wrap");
    fg4.appendChild(iw4);
    var iw5 = ca("input-wrap");
    fg5.appendChild(iw5);
    var iw6 = ca("input-wrap");
    fg6.appendChild(iw6);

    var lb1 = document.createElement("label");
    lb1.textContent = "Required ";
    iw1.appendChild(lb1);
    var lb2 = document.createElement("label");
    lb2.textContent = "Label ";
    iw2.appendChild(lb2);
    var lb3 = document.createElement("label");
    lb3.textContent = "Help Text";
    iw3.appendChild(lb3);
    var lb4 = document.createElement("label");
    lb4.textContent = "Class ";
    iw4.appendChild(lb4);
    var lb5 = document.createElement("label");
    lb5.textContent = "Name ";
    iw5.appendChild(lb5);
    var lb6 = document.createElement("label");
    lb6.textContent = "Value ";
    iw6.appendChild(lb6);

    var i1 = document.createElement("input");
    i1.type = "checkbox";
    i1.className = "fld-required";
    iw1.appendChild(i1);
    var i2 = document.createElement("input");
    i2.type = "text";
    i2.className = "fld-label form-control";
    i2.placeholder = "Label";
    iw2.appendChild(i2);
    var i3 = document.createElement("input");
    i3.type = "text";
    i3.className = "fld-description form-control";
    i3.placeholder = "";
    iw3.appendChild(i3);
    var i4 = document.createElement("input");
    i4.type = "text";
    i4.className = "fld-className form-control";
    i4.placeholder = "space separated classes";
    iw4.appendChild(i4);
    var i5 = document.createElement("input");
    i5.type = "text";
    i5.className = "fld-name form-control";
    i5.placeholder = "";
    iw5.appendChild(i5);
    var i6 = document.createElement("input");
    i6.type = "text";
    i6.className = "fld-value form-control";
    i6.placeholder = "Value";
    iw6.appendChild(i6);
}


//create action fields buttons
actionFields = function (subelem) {
    var a = document.createElement("a");
    a.id = name + "-edit";
    a.className = "toggle-form btn icon-pencil";
    a.title = "Edit";
    a.onclick = function () {
        //look for the currentnode
        var sb = this.parentNode;//subelem
        var li = sb.parentNode;//li
        var ul = li.parentNode;//ul
        var prevHolder, holder;
        for (var i = 0; i < li.children.length; i++) {
            var node = li.children[i];
            if (node.className === "prev-holder")
                prevHolder = node;
            if (node.className === "frm-holder")
                holder = node;
        }

        //extract input and label from prevHolder
        //prevHolder = li.children[3];


        ////extract info from Holder       
        frmElem = holder.children[0];

        var fg0 = frmElem.children[0];
        var iw0 = fg0.children[0];
        var i0 = iw0.children[1];

        var fg1 = frmElem.children[1];
        var iw1 = fg1.children[0];
        var i1 = iw1.children[1];

        var fg2 = frmElem.children[2];
        var iw2 = fg2.children[0];
        var i2 = iw2.children[0];

        var fg3 = frmElem.children[3];
        var iw3 = fg3.children[0];
        var i3 = iw3.children[1];

        var fg4 = frmElem.children[4];
        var iw4 = fg4.children[0];
        var i4 = iw4.children[1];

        var fg5 = frmElem.children[5];
        var iw5 = fg5.children[0];
        var i5 = iw5.children[1];

        var label = prevHolder.children[0];
        var input = prevHolder.children[1];
        if (prevHolder.style.display === "none") {
            var label = li.children[1];
            label.style = "display: none;"
            //display preview            
            prevHolder.style = "display: block;";
            holder.style = "display: none;";

            input.value = i5.value;
            input.required = i0.value;
            input.name = iw4.value;
            input.className = i3.value;
            label.textContent = i1.value;

        }
        else {
            var label = li.children[1];
            label.style = "display: block;"

            //display holder
            prevHolder.style = "display: none;";
            holder.style = "display: block;";

            i1.value = label.textContent;
            i5.value = input.value; //extract value from preview holder input text
        }

    };
    subelem.appendChild(a);

    var c = document.createElement("a");
    c.id = name + "-del";
    c.className = "del-button btn delete-confirm";
    c.title = "Remove Element";
    c.textContent = "×";
    subelem.appendChild(c);
    c.onclick = function () {
        var sb = this.parentNode;//subelem
        var li = sb.parentNode;//li
        var ul = li.parentNode;//ul
        ul.removeChild(li);
    }
}


// Generate JSON
function generateJson(phs) {
    var json = [];

    for (var i = 0; i < phs.length; i++) {
        //generate 1 element        
        var ph = phs[i];
        var li = ph.parentNode;//li
        var label, input;
        var input = ph.children[1];

        if (input != "undefined") {
            cp = new Object();
            cp.type = li.children[1].textContent; //input.attributes.type.nodeValue;
            cp.required = input.required;
            cp.name = input.name;
            cp.className = input.className;
            cp.label = ph.textContent;
            cp.value = input.value;
            //cp.subtype        
            //cp.style = input.style;
            //cp.tooltip //get tooltip element if any  
            //cp.values for rb and cb
            //cp.tooltip

            json.push(cp);
        }
    }
    return JSON.stringify(json);
};
