function getbudget(){
    var userBudget=document.getElementById("budget").value;
    var setBudget=document.getElementById("totalbudget").children[1].innerHTML=userBudget;
    var empityfield=document.getElementById("budget").value="";
}
var expense=[];
function updateValues(){

    var totalexpenses = 0;

    for(var i=0; i<expense.length; i++){

        totalexpenses += expense[i].expenseValue;
    }

    document.getElementById("totalexpenses").children[1].innerHTML = totalexpenses;

    var totalbudget = Number(document.getElementById("totalbudget").children[1].innerHTML);

    document.getElementById("balance").children[1].innerHTML = totalbudget - totalexpenses;
}

function addexpenses(){
    var expenseInput1=document.getElementById("expensename").value;
    var expenseInput2=document.getElementById("expense").value;
    var numInput2=Number(expenseInput2);
     var time=new Date()
     var timeid=time.getTime()
    expense.push({
        id:timeid,
        name:expenseInput1,
        expenseValue:numInput2
    });
 var removeNorecord=document.getElementById("norecord").style.display="none";
    var record=document.getElementById("record").innerHTML+=`<div class="expenserecord" id="${timeid}">
                <div>${expenseInput1}</div>
                <div>${expenseInput2}</div>
                <div><i class="fa-solid fa-pen-to-square" onclick="edit(${timeid})"></i></div>
                <div><i class="fa-solid fa-trash" onclick="deleteexpense(${timeid})"></i></div>
            </div>
            </div>`   ;
            updateValues();
    var empityfield=document.getElementById("expensename").value="";
    var empityfield2=document.getElementById("expense").value="";
};


function edit(id){
    var getExpName=document.getElementById(id).children[0].innerHTML;
    var getExpValue=document.getElementById(id).children[1].innerHTML;
    var expenseInput1=document.getElementById("expensename").value=getExpName;
    var expenseInput2=document.getElementById("expense").value=getExpValue;
    for(var i=0;i<expense.length;i++){
        if(expense[i].id==id){
            expense.splice(i,1);
            var remove=document.getElementById(id).remove()
        }
    }
updateValues();
}
function deleteexpense(id){
    for(var i=0;i<expense.length;i++){
        if(expense[i].id==id){
            expense.splice(i,1);
            var remove=document.getElementById(id).remove()
        }
    }
    if(expense.length==0){
        var showNorecord=document.getElementById("norecord").style.display="block";
    }
    updateValues();
}