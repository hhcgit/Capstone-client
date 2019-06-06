import React from 'react';
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../../Services/auth-api-service';



export default class RegistrationPage extends React.Component{
    static defaultProps = {
        onRegistrationSuccess: () => {}
      }
    
      state = { error: null }
    
    handleSubmit = ev => {
        ev.preventDefault()
        const { email, user_name, password } = ev.target
        this.setState({ error: null })
        AuthApiService.postUser({
            user_name: user_name.value,
            password: password.value,
            email: email.value,
        }).then(user => {
            email.value = ''
            user_name.value = ''
            password.value = ''
            this.props.onRegistrationSuccess()
          })
          .catch(res => {
            this.setState({ error: res.error })
          })
      }
    render() {
        const { error } = this.state
        return (
            <form classNAme="RegistrationForm"
                    onSubmit={this.handleSubmit}>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <div className='full_name'>
                    <label htmlFor='RegistrationForm__user_name'>
                        Username <Required />
                    </label>
                    <Input
                        name='user_name'
                        type='text'
                        required
                        id='RegistrationForm__user_name'>
                    </Input>
                </div>
                <div className='password'>
                    <label htmlFor='RegistrationForm__password'>
                        Password <Required />
                    </label>
                    <Input
                        name='password'
                        type='password'
                        required
                        id='RegistrationForm__password'>
                    </Input>
                </div>
                <div className='email'>
                    <label htmlFor='RegistrationForm__email'>
                        Email
                    </label>
                    <Input
                        name='email'
                        type='text'
                        required
                        id='RegistrationForm__email'>
                    </Input>
                </div>
                <Button type='submit'>
                     Register
                </Button>
                <Button type='button' onClick={this.props.onClickCancel}>
                    Cancel
                </Button>
            </form>
        )
    }
}
