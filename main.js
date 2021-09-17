var name_of_student=[];
function submit(){
    var name1=document.getElementById("textinput1").value;
    var name2=document.getElementById("textinput2").value;
    var name3=document.getElementById("textinput3").value;
    var name4=document.getElementById("textinput4").value;
    
    name_of_student.push(name1);
    name_of_student.push(name2);
    name_of_student.push(name3);
    name_of_student.push(name4);
    console.log(name_of_student);

    document.getElementById("display_name").innerHTML= name_of_student;
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}

function sorting(){
    name_of_student.sort();
    console.log(name_of_student);
    document.getElementById("display_name").innerHTML=name_of_student;
}
