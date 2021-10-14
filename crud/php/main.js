let id = $("input[name*='item_id']")
id.attr("readonly","readonly");


$(".btnedit").click( e =>{
    let textvalues = displayData(e);

    ;
    let itemname = $("input[name*='item_name']");
    let itemdetail = $("input[name*='detail']");
    let itemprice = $("input[name*='price']");

    id.val(textvalues[0]);
    itemname.val(textvalues[1]);
    itemdetail.val(textvalues[2]);
    itemprice.val(textvalues[3].replace("$", ""));
});


function displayData(e) {
    let id = 0;
    const td = $("#tbody tr td");
    let textvalues = [];

    for (const value of td){
        if(value.dataset.id == e.target.dataset.id){
           textvalues[id++] = value.textContent;
        }
    }
    return textvalues;

}