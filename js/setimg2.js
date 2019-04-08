var f=parseInt(document.getElementById("nam").value);
    var c=parseInt(document.getElementById("email").value);
    var d=parseInt(document.getElementById("dast").value);
    var e=0;
      $("button.a").click(function(){
        var b="<tr id='rt'><td class='icon icon-users-outline'></td><td><input placeholder='نام'/></td><td><input placeholder='ایمیل'/></td><td><input placeholder='درصد دسترسی'/></td></tr>";
       
           
       $("tr:last").after(b);
   });
        $(".delet").click(function(){
    
            $("#rt").remove();
            
        });