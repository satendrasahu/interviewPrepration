const student1 = {
    name: 'satendra sahu',
    age: 26,
    myfunction: function (myclass) {
      console.log(this.name, this.age, myclass);
    },
  };
  
  function myfunction(myclass) {
    console.log(this.name, this.age, myclass);
  }
  const student2 = {
    name: 'rohit varma',
    age: 26,
  };
  
  const student3 = {
    name: 'kavita kumari',
    age: 26,
  };
  
  student1.myfunction();
  
  student1.myfunction.call(student2, 'MCA');
  
  myfunction.call(student3, 'BSC');
  myfunction.apply(student3, ['BA']);
  myfunction.bind(student3, 'MBA')();
  