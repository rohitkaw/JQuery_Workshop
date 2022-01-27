$('document').ready(
    ()=>{
        $('input[type="button"]').click(
            ()=>{
                var username=$('input[type="text"]').val();
                var password=$('input[type="password"]').val();
                if(username=='' && password==''){
                    alert("Enter username password first !!!");
                }
                else{
                    $.ajax({
                        url:" http://localhost:3000/employees",
                        method:"POST",
                        data:{
                            "firstname":firstname,
                            "lastname":lastname,
                            "username":username,
                            "password":password,
                            "address":address,
                            "pin":pin         

                        },
                        success:(x)=>{
                            
                            alert(username+"Welcome !");
                            console.log(x);
                            window.location="http://127.0.0.1:5500/html/registration.html"
                           

                        },
                        error:(e)=>{
                            alert("Error: "+e);
                        }
                    })
                }
            }
        )
})
       

        