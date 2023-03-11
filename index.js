function addBinary(a,b){
    return (a+b).toString(2);
}

const zerofuel= (distancetopump,mpg,fuelleft)=>{
  return  fuelleft*mpg >=distancetopump
}