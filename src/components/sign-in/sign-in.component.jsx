import React from 'react'

import './sign-in.styles.scss'

import FormInput from '../../components/formInput/formInput.component'

import CustomButton from '../../components/custom-button/custom-button.component'

import {signInWithGoogle} from '../../firebase/firebase.util'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email:'',
            password:''
        }
      
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({email:'',password:''})
    }

    handleChange = event=> {
        const { value, name} = event.target

        this.setState({[name]:value})
     }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form action="#" onSubmit={this.handleSubmit}>
                   <FormInput 
                   type="email" 
                   name="email" 
                   value={this.state.email} 
                   handleChange= {this.handleChange}
                   label= 'Email'
                   required />
                   <FormInput 
                   type="password" 
                   name="password" 
                   value={this.state.password}
                   handleChange= {this.handleChange}
                   label='Password'
                   required />

                 <div className="buttons">
                 <CustomButton type="submit">
                       Sign In
                   </CustomButton>

                   <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                       Sign in with  google
                   </CustomButton>
                 </div>
                   
                </form>
            </div>
        )
    }
}

export default SignIn