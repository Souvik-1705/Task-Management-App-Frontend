const API_URL=process.env.REACT_APP_API_URL;

export const registerUser=async(data)=>{
    const res=await fetch(`${API_URL}/auth/register`,{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(data),
    });
    return res.json();
}

export const loginUser=async(data)=>{
    const res=await fetch(`${API_URL}/auth/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data),
    });
    return res.json();
}

export const getAuthHeader=()=>{
    const token=localStorage.getItem("token");
    return{
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
    };
}


export const getTasks=async()=>{
    const res=await fetch(`${API_URL}/tasks`,{
        headers:getAuthHeader(),
    });
    return res.json();
}

export const addTasks=async(task)=>{
    const res=await fetch(`${API_URL}/tasks`,{
        method:"POST",
        headers:getAuthHeader(),
        body:JSON.stringify(task),
    });
    return res.json();
}

export const updateTask=async(id,data)=>{
    const res=await fetch(`${API_URL}/tasks/${id}`,{
        method:"PUT",
        headers:getAuthHeader(),
        body:JSON.stringify(data),
    })
    return res.json();
}

export const deleteTask=async(id)=>{
    const res=await fetch(`${API_URL}/tasks/${id}`,{
        method:"DELETE",
        headers:getAuthHeader(),
    });
    return res.json();
}