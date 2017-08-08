
<script type="text/javascript">
 var word = "program";
 var vowels = "aeiou";
 var vowelCount = 0;

 for(var x = 0; x < word.length; x++){
  if(vowels.includes(word.charAt(x))){
   vowelCount += 1;
  }
 }

 document.write("Total: " + vowelCount.toString());
</script>


