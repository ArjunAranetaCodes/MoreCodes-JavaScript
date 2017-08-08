
<script type="text/javascript">
 var word = "program";
 var letter = "a";
 var letterCount = 0;

 for(var x = 0; x < word.length; x++){
  if(word.charAt(x).includes(letter)){
   letterCount += 1;
  }
 }

 document.write("Total: " + letterCount.toString());
</script>


