let viewBtn=document.querySelector(".viewBtn1");
let closeBtn=document.querySelector(".closeBtn2");
let modalView=document.querySelector(".box1Cont");

viewBtn.addEventListener("click",()=>{
    console.log("View button clicked!!..");
    modalView.classList.add("activate");
});

closeBtn.addEventListener("click",()=>{
    console.log("Modal closed..!!..");
    modalView.classList.remove("activate");
});
