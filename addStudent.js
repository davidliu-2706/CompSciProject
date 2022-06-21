function change_page(){
    // similar behavior as an HTTP redirect
    window.location.replace("evidence_record.html");
    //or
    // similar behavior as clicking on a link
    window.location.href = "evidnce_record.html";
 }; 


 function return_page(){
    // similar behavior as an HTTP redirect
    window.location.replace("students.html");
    //or
    // similar behavior as clicking on a link
    window.location.href = "students.html";
 }; 

 function next_page(){
   // similar behavior as an HTTP redirect
   window.location.replace("students.html");
   //or
   // similar behavior as clicking on a link
   window.location.href = "students.html";
}; 

 function getName(){
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        alert(fname+" "+lname);
        next_page();
};

   const btn = document.getElementById('block1');
   const submitButton = document.getElementByID('submit');
   
   submitButton.addEventListener('click', ()=>{
     btn.innerText = 'Button clicked';
   });
   




