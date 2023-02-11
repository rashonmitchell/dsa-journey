/* Adding a property to a prototype */
// Object.prototype.fullName = 'Jim Cooper';
// console.log(Object.prototype);
(function() {

    function Person(firstName, lastName, age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
  
    Object.defineProperty(this, 'fullName', {
      get: function() {
        return this.firstName + ' ' + this.lastName
      },
      enumerable: true
    });
  }
  
  function Student(firstName, lastName, age){
    // Required to call Parent object functions. allow the property values to be displayed
    Person.call(this, firstName, lastName, age); 
    this._enrolledCourses = [];
  
    this.enroll = function(courseID){
      this._enrolledCourses.push(courseId);
    };
  
    this.getCourses = function(){};
  }
  
  /*Two Student.prototype definitions Required for inheritance chain to work */
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;
  
    let jim = new Student('Jim', 'Cooper', 29); // creates a jim object
  
    console.log(jim);
    console.log(jim.__proto__);
    console.log(jim.__proto__.__proto__);
  
    // Person.prototype.age = 29;
  
    // let jim = new Person('Jim', 'Cooper');
    // let sofia = new Person('Sofia', 'Cooper');
  
    // jim.age = 18;
    // sofia.__proto__.age = 19;
    // console.log(jim.hasOwnProperty('age'));
  
    // console.log('Person Prototyepe', Person.prototype === jim.__proto__);
  
  }) ();
  
  function buildNumMap(nums) {
    const mapOfNums = {};
  
    for (let num = 0; num < nums.length; num++) {
      mapOfNums[num] = mapOfNums[num] + 1 || 1;
    }
    console.log('numsMap-1', mapOfNums);
    return mapOfNums;
  };
  buildNumMap([4,3,2,7,8,2,3,1]);


  /* Constructor Functions  */
(function (){

    // function Person(firstName, lastName, age){
    //   this.firstName = firstName;
    //   this.lastName = lastName;
    //   this.age = 56,
    //   isAdult = function() {return this.age > 21 }
    // }
  
    // let carol = new Person('Carol', 'Sanders', 38);
    // let sofia = new Person('Sofia', 'Snooper', 17);
    // let dad = new Person('Stephen', 'Sanders', 56);
  
    // console.log(carol);
    // console.log(sofia);
    // console.log(dad);
  
  
  /* Object literal -- USED MOSTLY   can use for-in loops to access values of properties */
  let person1 = {
    firstName: 'Teddy',
    lastName: 'Mitchell',
    number: 21,
  };
  
  /*  No One Uses this*/
  let person2 = Object.create(
      Object.prototype,
      {
        firtName: {value: 'Teddy', enumberable: true, writable:true, configurable:true},
        lastName: {value: 'Mitchell', enumberable: true, writable:true, configurable:true},
        number: {value: 21, enumberable: true, writable:true, configurable:true},
      }
  );
  
  console.log(person1);
  console.log(person2);
  }) ();
  
  /*Object Literal  */
  
  
  