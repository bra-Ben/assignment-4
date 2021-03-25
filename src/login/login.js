import { useState } from 'react';

function Login() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

//This function saves the whatever input the user will enter in the Username section.
    function UpdateUsername(e) {

        return (
            setUsername(e.target.value)
        )
    }

//This function saves the whatever input the user will enter in the Password section.
    function UpdatePassword (e){

        return (
            setPassword(e.target.value)
        )
    }

//This function is for submit button.
    function submit (e) {
        e.preventDefault();

        if (username ==="Benjamin" && password ==="54321") {
            console.log('It\'s working')

        }
    }

    return (

        <div className='form-container'>

            <form className='formdiv'>

                <div className='formtop'>               
                    <h1>Welcome</h1>
                </div>

                <div className='formbuttom'>

                    <div className='mid'>
                        <label>Username:</label>
                        <input type='text' onChange={UpdateUsername}></input>
                    </div>

                    <div className='end'>
                        <label>Password:</label>
                        <input type='password' onChange={UpdatePassword}></input>
                    </div>
                    
                </div>

                <button onClick={submit}>Login</button>
                
            </form>

        </div>
    )
}

export default Login;
