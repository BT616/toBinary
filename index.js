function addBinary(a,b){
    return (a+b).toString(2);
}

const zerofuel= (distancetopump,mpg,fuelleft)=>{
  return  fuelleft*mpg >=distancetopump
}

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U"); 
  }