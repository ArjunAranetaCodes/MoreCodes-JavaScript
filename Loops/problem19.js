
<script type="text/javascript">
PrintEven(10);

function PrintEven(num){
 if (num == 0){
  return num;
 }else{
  if (num % 2 == 0){
   document.write(num + "&lt<br/>");
  }
  return PrintEven(num - 1);
 }
}

</script>


