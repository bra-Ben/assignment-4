import { useState } from 'react';
// import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import { useHistory } from 'react-router-dom';




function Login() {

    let history = useHistory()
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState();

// Function for switching pages
    function goToPage(path) {
        history.push(path)
    }

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
            goToPage('/dashboard')
        }
        else {
            setMessage('Wrong Usename or Password')
        }
    }
    return (

        <div className='login-container'>

            <form className='logindiv'>

                <div className='formtop'>               
                    <h1 className='loginh1'>Welcome</h1>
                    <HomeWorkIcon style={{ fontSize: 70, marginTop: '20px' }} />
                </div>

                <div className='formmid'>

                    <div className='mid'>
                        <label >Username:</label> <br/>
                        <div className='bothlabels'>
                            <input type='text' onChange={UpdateUsername} className='inputstyle'></input>
                            <PersonIcon />
                        </div>
                    </div>

                    <div className='end'>
                        <label >Password:</label><br/>
                        <div className='bothlabels'> 
                            <input type='password' onChange={UpdatePassword} className='inputstyle'></input>
                            <LockIcon />
                        </div>
                    </div>

                </div>

                <div className='formbuttom'>
                    <button onClick={submit} className='mybuttons'>LOGIN</button>

                    <p>Don't have an account? Sign Up</p>
                </div>
            </form>

        </div>
    )
}

export default Login;