// Select All Elements 

let yName = document.getElementById("yName");
let yNumber = document.getElementById("yNumber");
let price = document.getElementById("price");
let start = document.getElementById("start");
let end = document.getElementById("end");
let btnSubmit = document.getElementById("btnSubmit");
let search = document.getElementById("search");
let length = document.getElementById("length");


// Create Members


let dataMember;  

if (localStorage.Member != null) {
  dataMember = JSON.parse(localStorage.Member);
} else {
  dataMember = [];
}

btnSubmit.onclick = function () {
  if (
    yName.value != "" &&
    yNumber.value != "" &&
    price.value != "" &&
    start.value != "" &&
    end.value != ""
  ) {
    let newMember = {
      yName: yName.value,
      yNumber: yNumber.value,
      price: price.value,
      start: start.value,
      end: end.value,
    };

    dataMember.push(newMember);

    showData();
    clearData();

    localStorage.setItem("Member", JSON.stringify(dataMember)); // Save In LocalStorage
  }
};

// Clear Inputs After Create Member

function clearData() {
  yName.value = "";
  yNumber.value = "";
  price.value = "";
  start.value = "";
  end.value = "";
}

// Show Data In Table

function showData() {
  let table = "";
  for (let i = 0; i < dataMember.length; i++) {
    table += `
             <tr>
                    <td>${i+1}</td>
                    <td>${dataMember[i].yName}</td>
                    <td>${dataMember[i].yNumber}</td>
                    <td>${dataMember[i].price}</td>
                    <td>${dataMember[i].start}</td>
                    <td>${dataMember[i].end}</td>
                    <td><button onclick = "deleteData(${i})" id = "delet">حذف</button></td>
                </tr>
        `;
  }
  document.getElementById("tbody").innerHTML = table;
  length.innerHTML = dataMember.length;
}

showData();

// Delete Button

function deleteData(i) {
  dataMember.splice(i, 1);
  localStorage.Member = JSON.stringify(dataMember);
  showData();
}

// Search In Data With Name

search.onkeyup = function (){
    searchData(this.value)
}


function searchData (value) {
    let table = "";
    for (let i = 0; i < dataMember.length; i++) {
        if (dataMember[i].yName.includes(value)) {
            table += `
            <tr>
                   <td>${i+1}</td>
                   <td>${dataMember[i].yName}</td>
                   <td>${dataMember[i].yNumber}</td>
                   <td>${dataMember[i].price}</td>
                   <td>${dataMember[i].start}</td>
                   <td>${dataMember[i].end}</td>
                   <td><button onclick = "deleteData(${i})" id = "delet">حذف</button></td>
               </tr>
       `;
        }
    }
    document.getElementById("tbody").innerHTML = table;
}
