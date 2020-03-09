var convert = ()=>{
    let beforeText = new String(document.getElementById("before").value);
    beforeText=beforeText.replace(/([0-9]+)\s([a-z|A-Z]+)(\s[a-z]{1,2}\.)/gi,"$2;");
    beforeText=beforeText.replace(/\s[a-z]{1,2}\./gi,",");
    document.getElementById("after").value = beforeText;
}