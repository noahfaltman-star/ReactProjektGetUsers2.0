

 export const fetchUsers = async() =>{

     const res = await fetch("https://api-userapi.onrender.com/api/users/getUsers",
     {
         headers:{"x-api-key": "elev-hemlighet-2026"}
     })
    if (!res.ok) {
    throw new Error(`Kunde inte hämta användare: ${res.status}`);
   
    
  }
  const data = await res.json()
  console.log(data);
  
   return  data

 }