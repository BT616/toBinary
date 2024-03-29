// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter.";
//  If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

function chromosomeCheck(sperm) {
  
    if(sperm.charAt(1) =="Y"){
     return "Congratulations! You're going to have a son."
    }
    return "Congratulations! You're going to have a daughter."
   }

or use 

   return sperm.includes('Y') ?
   "Congratulations! You're going to have a son." : 
   "Congratulations! You're going to have a daughter."
}