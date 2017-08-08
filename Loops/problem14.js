
<script type="text/javascript">
  var num = 0;
  var sum = 0;
  var ave = 0;

  for (var x = 0; x < 5; x++){
   num = parseInt(prompt("Enter the value of number: "));
   sum = sum + num;
  }
  ave = sum / 5;
  document.write("Average is " + ave.toString());
</script>


