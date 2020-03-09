var convert = ()=>{
    let beforeText = new String(document.getElementById("before").value);
    beforeText=beforeText
    .replace(/([0-9]+)\s([a-z|A-Z]+)(\s[a-z]{1,2}\.)/gi,"$2;")
    .replace(/\s[a-z]{1,2}\./gi,",")
    .replace(/\n([^a-z|A-Z].+\n)/gi," $1");
    document.getElementById("after").value = beforeText;
}