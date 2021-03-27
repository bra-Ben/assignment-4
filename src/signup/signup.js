import { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';



function Signup() {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    
    function UpdateUsername(e) {
        
        setUsername(e.target.value)

    } 

    function UpdateEmail(e) {

        setEmail(e.target.value)

    }

    function UpdatePassword (e) {
        setPassword(e.target.value)
    }

    function UpdatePassword2(e) {
        setPassword2(e.target.value)
    }

    function submit(e) {
        e.preventDefault()

        if (username !== "" && email !== "" && password === password2) {
            console.log("Account created successfully!")
        }

        else {
            console.log("One of your input fields is wrong. Please check again")
        }
    }

    return (

        <div className='signup-container'>
        
            <form className='signupdiv'>

                <div className='formtop'>
                    <h1>Sign-up to join our ever-growing family now...</h1>
                    {/* <HomeIcon style={{ fontSize: 70, marginTop: '20px' }} /> */}
                </div>

                <div className='formmid'>

                    <div className='labeldiv1'>
                        <label>Username:</label> <br/>
                        <div className='bothlabels'> 
                            <input type='text' className='signinputstyle' onChange={UpdateUsername}></input>
                            <PersonIcon />
                        </div>
                    </div>
                    
                    <div className='labeldiv2'>
                        <label>E-mail:</label> <br/>
                        <div className='bothlabels'> 
                            <input type='email' className='signinputstyle' onChange={UpdateEmail}></input>
                            <EmailIcon />
                        </div>
                    </div>

                    <div className='labeldiv3'>
                        <label>Password:</label> <br/>
                        <div className='bothlabels'> 
                            <input style={{backgroundColor: 'none'}} type='password' className='signinputstyle' onClick={UpdatePassword}></input>
                            <LockIcon />
                        </div>
                    </div>

                    <div className='labeldiv4'>
                        <label>Confirm Password:</label> <br/>
                        <div className='bothlabels'> 
                            <input type='password' className='signinputstyle' onClick={UpdatePassword2}></input>
                            <LockIcon />
                        </div>
                    </div>

                </div>

                <div className='formbuttom'>

                    <button className='mybuttons'>Sign Up</button>
                    <p>Already have an account? Login here</p>

                </div>

            </form>

        </div>

    )
}

export default Signup;

