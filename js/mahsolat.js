 var f=parseInt(document.getElementById("nm").value);
    var c=parseInt(document.getElementById("n").value);
    var e=0;
      
    $(document).ready(function(){
   $("button.a").click(function(){
        var b="<tr id='rt'><td><div class='fileUpload btn'> <span>تصویر</span><input type='file' class='upload'/></div></td> <td><input  placeholder='نام '/></td><td><input  placeholder='قیمت '/> </td> <td><input  placeholder='توضیحات اضافه'/></td> </td></tr>";
       
           
       $("tr:last").after(b);
   });
        $(".delet").click(function(){
    
            $("#rt").remove();
            
        });
        document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
};   
    });

