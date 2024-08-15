import React, { useState } from 'react'
import './App.css'
import { Eye, EyeOff } from 'lucide-react'

const App = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showCPassword, setShowCPassword] = useState(false)
  const [errors, setErrors] = useState({});
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    checkBox: false
  })

  const validateField = (name, value) => {
    let tempErrors = { ...errors };
    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch (name) {
      case 'firstName':
        if (!value.trim()) {
          tempErrors.firstName = "First Name is required.";

        } else if (!namePattern.test(value)) {
          tempErrors.firstName = "First Name can only contain alphabets with no spaces, numbers, or special characters.";

        } else {
          delete tempErrors.firstName;
        }
        break;

      case 'lastName':
        if (!value.trim()) {
          tempErrors.lastName = "Last Name is required.";

        } else if (!namePattern.test(value)) {
          tempErrors.lastName = "Last Name can only contain alphabets with no spaces, numbers, or special characters.";

        } else {
          delete tempErrors.lastName;
        }
        break;

      case 'email':
        if (!value.trim()) {
          tempErrors.email = "Email is required"

        } else if (!emailPattern.test(value)) {
          tempErrors.email = "Please enter avalid email address"

        } else {
          delete tempErrors.email;
        }
        break;

      case 'password':
        if (!value.trim()) {
          tempErrors.password = "password is required"

        } else if (value.length < 6) {
          tempErrors.password = "password must be atleast be 8 characters"

        } else {
          delete tempErrors.password;
        }
        break;

      case 'confirmPassword':
        if (!value.trim()) {
          tempErrors.confirmPassword = "Confirm Password is required.";

        } else if (value !== formState.password) {
          tempErrors.confirmPassword = "Passwords do not match.";

        } else {
          delete tempErrors.confirmPassword;
        }
        break;

      default:
        break;
    }

    setErrors(tempErrors);

  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value,
    });
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && formState.checkBox) {
      console.log("Form Data", formState);
    } else {
      console.log("Form validation failed", errors);

    }
  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  const toggleCPassword = () => {
    setShowCPassword(!showCPassword);
  }

  return (
    <div className='min-h-screen overflow-hidden flex justify-center items-center'>
      <form action="" className='' onSubmit={handleSubmit}>
        <div id='card' className='overflow-hidden rounded-xl bg-[rgba(29,29,29,0.75)] p-6 flex flex-col gap-4 w-full'>
          {/* firstname & lastname */}
          <div className='flex gap-6 w-full'>
            <label className='relative w-full'>
              <input
                type="text"
                name='firstName'
                value={formState.firstName}
                onChange={handleChange}
                required
                spellCheck='false'
                autoComplete='off'
                className='w-full bg-[rgba(29,29,29,0.75)] px-5 py-4 rounded-xl focus:outline-none peer' />
              <span className={`absolute left-3 text-gray-500 text-md transition-all duration-300 ease-in-out peer-focus:top-1 peer-focus:left-3 peer-focus:text-xs ${formState.firstName ? 'top-1 left-3 text-xs' : 'top-4 text-sm'}
          ${errors.firstName ? 'text-red-500' : formState.firstName ? 'text-green-500' : 'text-gray-500'}`}>
                Firstname
              </span>
            </label>
            <label className='relative w-full'>
              <input
                type="text"
                name='lastName'
                value={formState.lastName}
                onChange={handleChange}
                required
                spellCheck='false'
                autoComplete='off'
                className='w-full bg-[rgba(29,29,29,0.75)] px-5 py-4 rounded-xl focus:outline-none peer' />
              <span className={`absolute left-3 text-gray-500 text-md transition-all duration-300 ease-in-out peer-focus:top-1 peer-focus:left-3 peer-focus:text-xs ${formState.lastName ? 'top-1 left-3 text-xs' : 'top-4 text-sm'}
          ${errors.lastName ? 'text-red-500' : formState.lastName ? 'text-green-500' : 'text-gray-500'}`}>
                Lastname
              </span>
            </label>
          </div>

          {/* Emails */}
          <div className='flex gap-6 w-full'>
            <label className='relative w-full'>
              <input
                type="email"
                name='email'
                value={formState.email}
                onChange={handleChange}
                required
                spellCheck='false'
                autoComplete='off'
                className='w-full bg-[rgba(29,29,29,0.75)] px-5 py-4 rounded-xl focus:outline-none peer' />
              <span className={`absolute left-3 text-gray-500 text-md transition-all duration-300 ease-in-out peer-focus:top-1 peer-focus:left-3 peer-focus:text-xs ${formState.email ? 'top-1 left-3 text-xs' : 'top-4 text-sm'}
          ${errors.email ? 'text-red-500' : formState.email ? 'text-green-500' : 'text-gray-500'}`}>
                Email
              </span>
            </label>
          </div>

          {/* Password */}
          <div className='relative bg-inherit rounded-xl'>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formState.password}
              onChange={handleChange}
              required
              autoComplete='new-password'
              className='w-full bg-[rgba(29,29,29,0.75)] p-5 rounded-xl focus:outline-none peer' />
            <button type='button' onClick={togglePassword} className='absolute inset-y-0 right-3 items-center text-gray-600 hover:text-gray-400 focus:outline-none'>{showPassword ? <Eye /> : <EyeOff />}</button>
            <span
              className={`absolute left-3 text-gray-500 text-md transition-all duration-300 ease-in-out peer-focus:top-1 peer-focus:left-3 peer-focus:text-xs ${formState.password ? 'top-1 left-3 text-xs' : 'top-4 text-sm'}
          ${errors.password ? 'text-red-500' : formState.password ? 'text-green-500' : 'text-gray-500'}`}
            >
              Password
            </span>
          </div>

          {/* Confirm Password */}
          <div className='relative bg-inherit rounded-xl'>
            <input
              type={showCPassword ? "text" : "password"}
              name="confirmPassword"
              value={formState.confirmPassword}
              onChange={handleChange}
              required
              autoComplete='new-password'
              className='w-full bg-[rgba(29,29,29,0.75)] p-5 rounded-xl focus:outline-none peer' />
            <button type='button' onClick={toggleCPassword} className='absolute inset-y-0 right-3 items-center text-gray-600 hover:text-gray-400 focus:outline-none'>{showCPassword ? <Eye /> : <EyeOff />}</button>
            <span
              className={`absolute left-3 text-gray-500 text-md transition-all duration-300 ease-in-out peer-focus:top-1 peer-focus:left-3 peer-focus:text-xs ${formState.confirmPassword ? 'top-1 left-3 text-xs' : 'top-4 text-sm'}
          ${errors.confirmPassword ? 'text-red-500' : formState.confirmPassword ? 'text-green-500' : 'text-gray-500'}`}
            >
              Confirm Password
            </span>
          </div>

          <div className='flex items-center justify-start gap-2'>
            <input type="checkbox" name="checkBox" checked={formState.checkBox} onChange={handleChange} id="" className='outline-none mt-1' />
            <span>Term & condition</span>
          </div>
          <button type='submit' disabled={!formState.checkBox} className={`p-3 rounded-xl ${formState.checkBox ? 'bg-gray-500 text-white' : 'bg-[rgba(29,29,29,0.75)] text-gray-400 cursor-not-allowed'}`}>Submit</button>
        </div>
      </form>

    </div>
  )
}

export default App
