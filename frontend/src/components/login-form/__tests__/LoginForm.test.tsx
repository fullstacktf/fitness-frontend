import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginForm } from '../LoginForm';

describe('LoginForm', () => {
    describe('Render', () => {
        test('Should test Sign In text exists', () => {
            render(<LoginForm/>);

            const signInText = screen.getByText('Sign In');
            expect(signInText).toBeInTheDocument();
        });

        test('Should test email TextField exists', () => {
            render(<LoginForm/>);

        });

        test('Should test password TextField exists', () => {
            render(<LoginForm/>);

        });

        test('Should test Register Button exists', () => {
            render(<LoginForm/>);

            const registerButton = screen.getByText('Register');
            expect(registerButton).toBeInTheDocument();
        });

        test('Should test new user text exists', () => {
            render(<LoginForm/>);

            const newUsertext = screen.getByText('Are you new to YouLift?');
            expect(newUsertext).toBeInTheDocument();
        });

        test('Should test Login Button exists', () => {
            render(<LoginForm/>)
            const loginButton = screen.getByText('Login');
            expect(loginButton).toBeInTheDocument();
        });

    });
});
