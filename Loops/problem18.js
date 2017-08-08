
<script type="text/javascript">
for (var x = 0; x <= 11; x++){
 document.write(Fibonacci(x) + "&lt<br/>");
}

function Fibonacci(num){
 if ((num == 1) || (num == 0)){
  return num;
 }else{
  return Fibonacci(num - 1) + Fibonacci(num - 2);
 }
}

</script>


