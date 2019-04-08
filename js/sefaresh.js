var f=parseInt(document.getElementById("nam").value);
    var c=parseInt(document.getElementById("email").value);
    var s=parseInt(document.getElementById("sef").value);
    var e=0;
 $("button.a").click(function(){
        var b="<tr id='rt'><td class='icon icon-users-outline'></td><td><input placeholder='نام'/></td><td><input placeholder='ایمیل'/></td><td><input placeholder='سفارشات' /></td><td><div class='fileUpload btn'> <span>تصویر</span><input type='file' class='upload'/></div></td></tr>"; 
       
       $("tr:last").after(b);
   });
        $(".delet").click(function(){
    
            $("#rt").remove();
            
        });
     document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
}; 