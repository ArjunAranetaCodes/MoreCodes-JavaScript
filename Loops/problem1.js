
<script type="text/javascript">
 var sum = 0;

 for(var x = 0; x <= 50; x++){
  if((x % 3 == 0) && (x % 5 == 0)){
   document.write("FizzBuzz&lt<br/>");
  }else if(x % 3 == 0){
   document.write("Fizz&lt<br/>");
  }else if(x % 5 == 0){
   document.write("Buzz&lt<br/>");
  }else{
   document.write(x + "&lt<br/>");
  }
 }
</script>


