function registration()
{

    var name= document.getElementById("t1").value;
    var email= document.getElementById("t2").value;
    var phno= document.getElementById("t6").value;
    var uname= document.getElementById("t3").value;
    var pwd= document.getElementById("t4").value;			
    var cpwd= document.getElementById("t5").value;
    var college_name = document.getElementById("t6").value;
    var branch= document.getElementById("t7").value;
    var State= document.getElementById("t8").value;
    var Address= document.getElementById("t9").value;
    var age= document.getElementById("t10").value;
    
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var mailformat = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-z]$/ ;
   // var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var phoneformat=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ ;
    var age= /^[1-9]?[0-9]{1}$|^100$/  

    
    if(name=='')
    {
        alert('Please enter your name');
    }
    else if(!letters.test(name))
    {
        alert('Name field required only alphabet characters');
    }
    else if(email=='')
    {
        alert('Please enter your user email id');
    }
    else if (!mailformat.test(email))
    {
        alert('Invalid email');
    }
    else if(phno=='')
    {
        alert('Please enter your phone number');
    }
    else if (!phoneformat.test(phno))
    {
        alert('Invalid phone number');
    }
    else if(uname=='')
    {
        alert('Please enter the user name.');
    }
    else if(!letters.test(uname))
    {
        alert('User name field required only alphabet characters');
    }
    else if(college_name=='')
    {
        alert('Please enter College Name')
    }

    else if(branch=='')
    {
        alert('Please enter Brach')
    }
    else if(!letters.test(branch))
    {
        alert('The BranchName you have enterd cotains Numbers/Charecters Please Enter the right Branch')
    }

    else if(State=='')
    {
        alert('Please enter State')
    }
    else if(!letters.test(State))
    {
        alert('The StateName you have enterd cotains Numbers/Charecters Please Enter the right State Name')
    }

    else if(Address=='')
    {
        alert('Please enter your Address')
    }

    else if(age=='')
    {
        alert('Please enter your age')
    }
    else if(!age.test(age))
    {
        alert('Enter your Age')
    }

    else if(pwd=='')
    {
        alert('Please enter Password');
    }
    else if(cpwd=='')
    {
        alert('Enter Confirm Password');
    }
    else if(!pwd_expression.test(pwd))
    {
        alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if(pwd != cpwd)
    {
        alert ('Password not Matched');
    }
    else if(document.getElementById("t5").value.length < 6)
    {
        alert ('Password minimum length is 6');
    }
    else if(document.getElementById("t5").value.length > 12)
    {
        alert ('Password max length is 12');
    }
    else
    {				                            
           alert('Thank You for Login & You are Redirecting to a Main Page');
          window.location = "registration.html"; 
    }
}

function displayReg()
{
    doc.registration(strXML)
    var x = doc.getElementsByTagName("COMPUTER-SCIENCE"); 
    for (i = 0;i < x.length; i++)
    {  
        alert(x[i].getElementsByTagName("STU-NAME")[0].childNodes[0].nodeValue); // India  
        alert(x[i].getElementsByTagName("STU-UNIVERSITY")[0].getAttribute('Link') );// 12345  
     }
}