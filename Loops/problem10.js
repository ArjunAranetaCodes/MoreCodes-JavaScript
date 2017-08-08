
<script type="text/javascript">
 var num = 371;
 var sum = 0;
 var temp = 0;
 var rmdr = 0;

 temp = num;

 while (temp != 0){
  rmdr = parseInt(temp % 10);
  sum = sum + (rmdr * rmdr * rmdr);
  temp = parseInt(temp / 10);
 }

 if (num == sum){
  document.write("Armstrong number");
 }else {
  document.write("Not an Armstrong number");
 }
</script>


