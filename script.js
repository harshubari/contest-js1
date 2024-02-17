let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    arr.map((item) => {
      if (item.marks > 50) {
        console.log(item);
      }
      return;
    })
  }
  
  function PrintStudentsbyForEach() {
    arr.forEach((item) => {
      if(item.marks>=50){
        console.log(item);
      }
    });
  }
  
  function addData() {
    let newarr = [...arr];
    newarr.push({id:4,name:"susan",age:"20",marks:45});
    console.log(newarr);
  }
  
  function removeFailedStudent() {
    arr = arr.filter((item) => item.marks >= 50);
    console.log(arr); 
  }
  
  function concatenateArray() {
    let arr1 = [
      { id: 10, name: "john", age: "18", marks: 80 },
      { id: 12, name: "jack", age: "20", marks: 85 },
      { id: 13, name: "karen", age: "19", marks: 35 }, 
    ];
    console.log(arr.concat(arr1));
  }