//Basics of Functions

<script type="text/javascript">
 //function that has no return value and no passing argument/parameter
 function function1(){
  document.write("Hello there!<br/>");
 }

 //function that has no return value but has passing argument/parameter
 function function2(num){
  document.write("That number is " + num + "<br/>");
 }

 //function that has return value but has no passing argument/parameter
 function function3(){
  var sum = 1 + 1;
  return sum;
 }

 //function that has return value and has passing argument/parameter
 function function4(firstName, lastName){
  var fullName = firstName + " " + lastName;
  return fullName;
 }

 function1();
 function2(5);
 document.write("It's true! 1+1 = " + function3() + "<br/>");
 document.write("Hi " + function4("More","Codes") + "<br/>");
</script>

