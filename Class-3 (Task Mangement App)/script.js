// Selected Elements
const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const modalTaskArea = document.querySelector(".textArea-cont");
const mainTicketContainer = document.querySelector(".main-cont");
const allPriorityColors = document.querySelectorAll(".priority-color ");


let ticketColor = 'lightpink'

// lock Classes
let openedLock =  'fa-lock-open'
let closedLock = 'fa-lock'

//flags
let modalFlag = false;

// This Event opens and closes the Modal
addBtn.addEventListener("click", function () {
  // Modal Pops up
  if (modalFlag == false) {
    modalCont.style.display = "flex";
    modalFlag = true;
  } else {
    modalCont.style.display = "none";
    modalFlag = false;
  }

  // Modal Hides
});

// Create ticket - ticket Generation
function generateTicket(task ) {
  const ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = ` 
  <div class="ticket-color" style="background-color: ${ticketColor};" ></div>
  <div class="ticket-id">12345</div>
  <div  class="task-area">${task}</div>
   <div class="ticket-lock">
     <i class="fa-solid fa-lock"></i>
</div>`;

  mainTicketContainer.appendChild(ticketCont);

  handleLock(ticketCont)
}

//
modalCont.addEventListener("keydown", function (e) {
  if (e.key == "Shift") {
    const taskFromModal = modalTaskArea.value;
    generateTicket(taskFromModal);
    modalCont.style.display = "none";
    modalFlag = false;
    modalTaskArea.value = "";
  }
});

allPriorityColors.forEach(function (colorItem) {
  colorItem.addEventListener("click", function () {
    
    allPriorityColors.forEach(function (priortyColor) {
      priortyColor.classList.remove("active");
      colorItem.classList.add("active");
     
    });

     ticketColor = colorItem.classList[0]  // lightgreen
  });
});


// handle Lock

function handleLock(ticket){
   const lockContainer = ticket.querySelector('.ticket-lock')
   const lockIcon = lockContainer.children[0]
   const taskArea = ticket.querySelector('.task-area')

   lockIcon.addEventListener('click' , function(){
       if(lockIcon.classList.contains(closedLock)){
        lockIcon.classList.remove(closedLock)
        lockIcon.classList.add(openedLock)
        taskArea.setAttribute('contenteditable' , true)



        // task can be edited
       }else{
        lockIcon.classList.remove(openedLock)
        lockIcon.classList.add(closedLock)
        // task should be fixed
        taskArea.setAttribute('contenteditable' , false)
       }
   })
}
