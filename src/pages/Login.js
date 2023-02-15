import {useState} from "react"
import { Navigate } from "react-router-dom";


function Login( {onLogin, setUser} ) {

    const initialValue = {
        username: '',
        password: ''
    }

    const [formData, setformData] = useState(initialValue)

    function handleInput(e) {
        const value = e.target.value
        const name = e.target.name
        setformData({
          ...formData,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
       
        const user = {
            username: formData.username,
            password: formData.password
        }
        onLogin(user)
         setUser("test")
        
        // onLogin(user)
        // history.push("/home")

        // fetch("http://localhost:3200/login", {
        //     method: "POST",yg
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(formData),
        //     })
        //     .then((r) => r.json())
        //     .then((user) => {
        //         onLogin(user);
        //         // after logging the user in, redirect to the home page!
        //         history.push("/home");
        //     })
        //     .catch(error => console.log(error));
    }
    

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text"
                           id="username"
                           name="username"
                           value={formData.username}
                           onChange={handleInput}
                    />
                </div>
                <div> 
                    <label htmlFor="password">Password</label>
                    <input type="text"
                           id="password"
                           name="password"
                           value={formData.password}
                           onChange={handleInput}
                    />
                </div>
                
                <input type="submit" name="Submit"/>
            </form>
        </>
    
    )
}


export default Login