class classes {
    constructor(p_block, p_course) {
      this.block = p_block;
      this.course = p_course;
    }
}

function InitializePage(){

    let blockA = new classes("A", "Empty");
    let blockB = new classes("B", "Empty");
    let blockC = new classes("C", "Empty");
    let blockD = new classes("D", "Empty");

    if(blockA.course == "Empty"){
        document.getElementById("ba").textContent = "TEJ4M";
        document.getElementById("eba").textContent = "-";
    }
    else{
        document.getElementById("ba").textContent = "Block A - " + blockA.course;
        document.getElementById("eba").textContent = "-";
    }

    if(blockB.course == "Empty"){
        document.getElementById("bb").textContent = "TEJ3M";
        document.getElementById("ebb").textContent = "-";
    }
    else{
        document.getElementById("bb").textContent = "Block B - " + blockB.course;
        document.getElementById("ebb").textContent = "-";
    }

    if(blockC.course == "Empty"){
        document.getElementById("bc").textContent = "TEJ2O";
        document.getElementById("ebc").textContent = "-";
    }
    else{
        document.getElementById("bc").textContent = "Block C - " + blockC.course;
        document.getElementById("ebc").textContent = "-";
    }

    if(blockD.course == "Empty"){
        document.getElementById("bd").textContent = "Block D - Empty";
        document.getElementById("ebd").textContent = "+";
    }
    else{
        document.getElementById("bd").textContent = "Block D - " + blockD.course;
        document.getElementById("ebd").textContent = "-";
    }

    return;
}

function CreateClass(){
    
    console.log("Hello world");

    return

}

function DeleteClass(p_class){

}

function SetBlock(p_class, p_block){
    p_class.block = p_block;
    return;
}

function SetCourse(p_class, p_course){
    p_class.course = p_course;
    return;
}

function back_page(){
    window.location.replace("welcome.html");
    //or
    // similar behavior as clicking on a link
    window.location.href = "welcome.html";
}

function next_page(){
    // similar behavior as an HTTP redirect
    window.location.replace("students.html");
    //or
    // similar behavior as clicking on a link
    window.location.href = "students.html";
 }; 

