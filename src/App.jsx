import React, { useState, useEffect } from "react";
import axios from 'axios';

const App = () => {
    const [count,setCount]=useState(0);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNumber,setPageNumber] = useState(1)


    const getData=async () => {
        try{
            setLoading(true);

            // REST api
            // GET
            // POST
            // PATCH 
            // PUT 
            // DELETE
            const response= await axios.get(`https://reqres.in/api/users?page=${pageNumber}`); 
            console.log('response',response);
            console.log('response.data',response.data);
            if(response.status===200){
                setData(response.data.data)
            }
            else{
                alert('some error,please try again')
            }
        }catch(error){
            console.log(error);
            alert(error);
        }finally{
            setLoading(false);
        }
    }

    const showUserData = (userId) => {
        const user = data.find(user => user.id === userId);
        console.log("Selected user: ",user);
        setLoading(user);
    };

    useEffect(() => {
        getData();
        console.log('useeffect')
    },[count]) // dependency bracket 

    

    return (
        <div>
            <h1>User Profile</h1>
            {loading ? (
               <h1>Loading...</h1>
            ) : (
                data.map((item,index) => (
                    <div key={item.id}>
                    <h1>First Name : {item.first_name}</h1>
                    </div>
                ))
            )}
            <button onClick={()=>setCount(count+1)}>Refresh</button>
            <button onClick={()=>setPageNumber(pageNumber+1)}>Page1</button>
            <button onClick={()=>setPageNumber(pageNumber+1)}>Page2</button>
        </div>
    );
}

export default App;