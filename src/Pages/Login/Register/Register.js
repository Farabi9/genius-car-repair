import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';



const Register = () => {

    const [agree, setAgree] = useState(false);


    const [
        createUserWithEmailAndPassword,
        
        loading
     
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    
    if(loading || updating){
        return <Loading></Loading>
    }

   

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        //    const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name});
        alert('Updated profile');
        navigate('/home')
    }
  
  
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>
                Please register
            </h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Your Name' />
                <br />
                <input type="text" name='email' id='' placeholder='Email Address' required />
                <br />
                <input type="password" name="password" id="" placeholder='Password' required />
                <br />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" />
                <label className={agree ? ' ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Genius car terms and condition</label>
                <input
                    disabled={!agree}
                    className='bg-dark text-white mt-2' type="submit" value="Register" />

            </form>
            <p>Already have an accout? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;