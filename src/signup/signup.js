import { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';



function Signup() {


    


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
                            <input type='text' className='inputstyle'></input>
                            <PersonIcon />
                        </div>
                    </div>
                    
                    <div className='labeldiv2'>
                        <label>E-mail:</label> <br/>
                        <div className='bothlabels'> 
                            <input type='email' className='inputstyle'></input>
                            <EmailIcon />
                        </div>
                    </div>

                    <div className='labeldiv3'>
                        <label>Password:</label> <br/>
                        <div className='bothlabels'> 
                            <input type='password' className='inputstyle'></input>
                            <LockIcon />
                        </div>
                    </div>

                    <div className='labeldiv4'>
                        <label>Confirm Password:</label> <br/>
                        <div className='bothlabels'> 
                            <input type='password' className='inputstyle'></input>
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

