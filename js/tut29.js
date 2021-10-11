
// If user adds a note, add it to the localStorage

showNotesFuncBB()           // After Going to website it will show our notes


console.log(localStorage)
let addBtn=document.getElementById('addBtn')
addBtn.addEventListener('click',function (e) {
    console.log('clicked')
    let addTxt=document.getElementById('addTxt')
    let addTtl=document.getElementById('addTitle')
    
    let lNotes=localStorage.getItem('lNotes')       // lNotes means local storages notes
    console.log(lNotes)

    let lNotesArr;
    if (lNotes == null) {       // if you did not store notes on there
        lNotesArr=[]
    }else{
        lNotesArr=JSON.parse(lNotes)
    }
    
    let curNotes={
        titley: addTtl.value,
        notesy: addTxt.value
    }
    
    lNotesArr.push(curNotes)
    localStorage.setItem('lNotes',JSON.stringify(lNotesArr))
    
    // curNotes=''      // it did not works
    addTxt.value=''     // it works ..I think you got the point.......I think you got the point
        
    addTtl.value='' 


    console.log(localStorage)
    // localStorage.clear()
    showNotesFuncBB()
})



// Function to show elements from localStorage
function showNotesFuncBB() {
    let lNotes=localStorage.getItem('lNotes')       // lNotes means local storages notes
    console.log(lNotes)

    let lNotesArr2
    if (lNotes == null) {       // if you did not store notes on there
        lNotesArr2=[]
    }else{
        lNotesArr2=JSON.parse(lNotes)
    }

    let htmly=''
    if (lNotesArr2.length == 0 ) {
        htmly=`No notes avilable ! Please add some notes Baby`
    }else{
        // lNotesArr2.array.forEach(elementz,indexy function () {
        lNotesArr2.forEach(function(elementy,indexy){
            htmly+=`
            <div class="noteCardBB  card mx-2 my-2" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${elementy.titley}</h5>
              <p class="card-text">${elementy.notesy}</p>
              <button id="${indexy}" onclick="deleteNotesFuncBB(this.id)"  id="dltbtn" class="btn btn-primary">Delete Note</button>            <!-- (this.id)  will send it's id....here id is equal to our index.....we will talk about it on next videos -->
            </div>
          </div>`
        })
            
    }
    let notesyDiv=document.getElementById('notesyDiv')  
    notesyDiv.innerHTML=htmly   
    // console.log(htmly)
}
console.log()
// console.log("")


// Function to delete a note

function deleteNotesFuncBB(indexk) {
    console.log('i m deleteting ',indexk)

    let lNotes=localStorage.getItem('lNotes')       
    let lNotesArr=JSON.parse(lNotes)
    lNotesArr.splice(indexk,1)      // it will delete this index from this array
    localStorage.setItem('lNotes',JSON.stringify(lNotesArr))
    console.log(lNotesArr)
    showNotesFuncBB()       // Updating the page
}

// let's implement search functionality

let searchTxt=document.getElementById('searchTxt')
searchTxt.addEventListener('input',function(e) {         // input means if you type anything then this will call
    let inputValueBB=searchTxt.value
    console.log(inputValueBB)

    let noteCardBB=document.getElementsByClassName('noteCardBB')
    // console.log(noteCardBB)     // html collection.....so for using 'foreach loop' we need to convert it into array

    // Array.from(noteCardBB).forEach(elemetkk,indexy){     // wrong
    Array.from(noteCardBB).forEach(function(elemetkk,indexy){
        // console.log(elemetkk)
        let noteTextBB=elemetkk.getElementsByTagName('p')[0].innerText
        let titleyTextBB=elemetkk.getElementsByTagName('h5')[0].innerText
        console.log(noteTextBB)
        console.log(titleyTextBB)
        
        
        if (noteTextBB.includes(inputValueBB) || titleyTextBB.includes(inputValueBB)) {
            elemetkk.style.display='block'      // block means it will show
        } else {
            elemetkk.style.display='none'      // it will not show

            
        }

    })
    
})