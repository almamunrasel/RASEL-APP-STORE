const getStoredApp=()=>{
  const storedAppSTR = localStorage.getItem("appList");
  if(storedAppSTR){
    const storedAppData=JSON.parse(storedAppSTR);
    return storedAppData;
  }
  else{
    return [];
  }

}

const addToStoredDB =(id)=>{
  const storedAppData=getStoredApp();
  if(storedAppData.includes(id)){
    alert('this already exist')
  }
  else{
    storedAppData.push(id);
    const data=JSON.stringify(storedAppData);
    localStorage.setItem("appList",data);
  }
}
const removeFromStoredDb =(id)=>{
  let storedAppData = getStoredApp();
  if(storedAppData.includes(id)){
    storedAppData=storedAppData.filter(item=>item!=id);
    localStorage.setItem("appList", JSON.stringify(storedAppData));
     
    
  }
  return storedAppData;

  
  

  
}

export{addToStoredDB,getStoredApp,removeFromStoredDb};

