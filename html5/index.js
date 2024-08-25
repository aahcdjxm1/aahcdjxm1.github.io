function button_down()
{
    let text;
    text = document.getElementsByTagName("input")[0].value;;
    input_text(text);
};
function input_text(b)
{
    document.getElementById("inputthing").innerHTML=b;
};