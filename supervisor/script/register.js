var form =document.getElementById ('sign_up');
form.onsubmit=function(e){
    e.preventDefault();
    console.log(form.f_name.value);
    console.log(form.l_name.value);
    console.log(form.email.value);
    console.log(form.telephone.value);
    console.log(form.location.value);
    console.log(form.dept.value);
    console.log(form.role.value);
    console.log(form.assistant.value);
    console.log(form.username.value);
    console.log(form.password.value);
 

    // let data = {
    //     "f_name": form.f_name.value,
    //     "l_name": form.l_name.value,
    //     "email": form.email.value,
    //     "telephone": form.telephone.value,
    //     "location": form.location.value,
    //     "dept": form.dept.value,
    //     "role": form.role.value,
    //     "username": form.username.value,
    //     "password": form.password.value,
    // }   

    /////AJAX TO GET THE LIST OF ALL FACULTIES AVAILABLE IN THE DATABASE///////
        // $.ajax({
        //     type: "POST",
        //     data: data,
        //     url: "http://localhost:8000",
        //     async: true,
        //     success: function(data){
        //         console.log(data)
        //     },
        //     error: function (xhr){
        //         console.log(xhr)
        //     },
        //     contentType: "application/x-www-form-urlencoded",
        //     complete: function(xhr,status) { },
        //     dataType: "JSON"
        // });
        //END OF AJAX
}



