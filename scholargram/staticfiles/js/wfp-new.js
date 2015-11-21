function Calculate() 
{ 
  var valPages = parseFloat(document.getElementById('pages').value); 
  var valListPrice = parseFloat(document.getElementById('ListPrice').value);
  var valBinding = parseFloat(document.getElementById('binding').value); 
  var valSize = parseFloat(document.getElementById('size').value);

if (valPages<600){
  var cost = 0;
  var wfproyalty = 0; 
  var azroyalty = 0;
  var fproyalty = 0; 
  
  var fixed5x8 = 50; 
  var fixed55x85 = 50; 
  var fixed6x9 = 60; 
  var fixed7x9 = 60;
  var fixeda4 = 90; 
  
  //var size5x8 = 0.68;
  //var size6x9 = 0.81;
  //var sizea4 = 1.17;
  
  var size5x8 = 0.65;
  var size55x85 = 0.68;
  var size6x9 = 0.71;
  var size7x9 = 0.87;
  var sizea4 = 0.92;
  
  
  var wfpfixed = 0; 
  var profit=0
  var otherroyalty=0
  var otherchannelfixed = 0;
  
  
  
  if(valSize==1)
  {

    if (valPages<260){
      fixed5x8 = fixed5x8+0;
    }
    else if (valPages<500){
      fixed5x8 = fixed5x8 + 0.5*fixed5x8;
    }
    else if (valPages<600){
      fixed5x8 = fixed5x8 + fixed5x8;
    }
    
    if(valBinding==1){
      cost = size5x8*valPages+fixed5x8;  
    }
    
  }
  
  if(valSize==2)
  {

    if (valPages<260){
      fixed55x85 = fixed55x85+0;
    }
    else if (valPages<500){
      fixed55x85 = fixed55x85 + 0.5*fixed55x85;
    }
    else if (valPages<600){
      fixed55x85 = fixed55x85 + fixed55x85;
    }
    
    if(valBinding==1){
      cost = size55x85*valPages+fixed55x85;  
    }
    
  }
  
   if(valSize==3)
   {
    if (valPages<225){
    fixed6x9 = fixed6x9+0;
    }
    else if (valPages<450){
      fixed6x9 = fixed6x9 + 0.5*fixed6x9;
    }
    else if (valPages<600){
      fixed6x9 = fixed6x9 + fixed6x9;
    }
    
    if(valBinding==1){
      cost = size6x9*valPages+fixed6x9;  
    }
    
  }
  
  if(valSize==4)
   {
    if (valPages<225){
    fixed7x9 = fixed7x9+0;
    }
    else if (valPages<450){
      fixed7x9 = fixed7x9 + 0.5*fixed7x9;
    }
    else if (valPages<600){
      fixed7x9 = fixed7x9 + fixed7x9;
    }
    
    if(valBinding==1){
      cost = size7x9*valPages+fixed7x9;  
    }
    
  }
  
  if(valSize==5)
  {

    if (valPages<200){
    fixeda4 = fixeda4+0;
    }
    else if (valPages<400){
      fixeda4 = fixeda4+0.5*fixeda4;
    }
    else if (valPages<600){
      fixeda4 = fixeda4+fixeda4;
    }
    
    if(valBinding==1){
      cost = sizea4*valPages+fixeda4;  
    }
  }


  profit = valListPrice - cost;
  
  wfproyalty = 0.7*profit;
  azroyalty = wfproyalty*0.5;
  fproyalty = wfproyalty*0.5;
   
  
  document.getElementById('cost').value = Math.round(cost);
  document.getElementById('wfproyalty').value =  Math.round(wfproyalty);
  document.getElementById('azroyalty').value =  Math.round(azroyalty);
  document.getElementById('fproyalty').value =  Math.round(fproyalty);

}

else{
document.getElementById('err').innerHTML = "Maximum number of pages allowed is 600";
}

}
