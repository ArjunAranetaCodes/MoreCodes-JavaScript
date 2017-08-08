
<script type="text/javascript">
 var num1 = 1;
 var num2 = 1;

 document.write(num1 + "&lt<br/>");
 while (num2 < 100){
  document.write(num2 + "&lt<br/>");
  num2 = num2 + num1;
  num1 = num2 - num1;
 }

</script>


