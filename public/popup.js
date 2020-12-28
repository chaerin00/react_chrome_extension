function submit(){
    var t = document.getElementsByClassName('directory'); 
    t.addEventListener('change', function(event){ 
        const btn=document.createElement("button");
        btn.value="open cookie parking";
        document.getElementsByName('form').appendChild(btn); });

}