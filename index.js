var tickets = [
    {no: 1 , amount : 100},
    {no: 2 , amount : 120},
    {no: 3 , amount : 130},
    {no: 4 , amount : 100},
    {no: 5, amount : 100},
    {no: 6 , amount : 120},
    {no: 7 , amount : 130},
    {no: 8 , amount : 140},
    {no: 9 , amount : 102},
    {no: 10 , amount : 105}
];
str = `
`;
tickets.forEach(function(value,index){

    str = str + `
    <div class='col-x1-1' for='${value.no}#${value.amount}' onclick='myfunction(this)'>${value.no}<br/> ${value.amount}</div>
    `
})

document.getElementById("maindiv").innerHTML = str;


arr1 = [];
arr2 = [];
function myfunction(myvar){
  let ans = myvar.attributes.for.value;
  let ans1 = ans.split("#");
  console.log(ans1);

  let position = arr1.indexOf(ans1[0]);
  if(position == -1){
    arr1.push(ans1[0]);
    arr2.push(ans1[1]);

    msg = "Ticket Added";



  }else{
    msg = "Ticket Already Exist";

  }
  console.log(arr2);
  //console.log(arr1);



  document.getElementById("msg").innerHTML = msg;
  final_no = arr1.join(",");
  console.log(final_no);


  document.getElementById("no").innerHTML = final_no;

  final_amount = arr2.join("+");
  //console.log(final_amount);

  let total_amount = eval(final_amount);
  //console.log(total_amount);

  document.getElementById("amount").innerHTML = total_amount;
  myvar.style.background = "#f00"

  

}

