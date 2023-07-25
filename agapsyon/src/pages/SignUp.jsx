import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SignUp() {
  const [firstName, setFirstName] = React.useState('');
  const [middleName, setMiddleName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const onSubmit = e => {
    e.preventDefault();
    // Add form validation and submission
  };

  useEffect(() => {
    document.body.style.background =
      'linear-gradient(to right, #FFEDCC, #BFCFFF)';
    document.body.style.height = '100vh';
    return () => {
      document.body.style.background = null;
      document.body.style.height = null;
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-['linear-gradient(to right, #FFEDCC, #BFCFFF)'] m-0 p-0">
      {/* Left side */}
      <div className='w-full md:w-1/2 h-full flex flex-col items-center p-10'>
        <img
          src='/src/images/logo.png'
          alt='Logo'
          className='h-[225px] w-[225px] m-0 mt-[20px] self-center'
        />
        <h1 className='text-2xl md:text-3xl font-bold m-0 mt-5 text-center'>
          AgapSyon: Paghanda at Pag-aksyon sa mga Sakuna
        </h1>
      </div>

      {/* Right side */}
      <div className='w-full md:w-1/2 h-full bg-gray-200 flex flex-col items-center p-10'>
        <form
          onSubmit={onSubmit}
          className='w-full space-y-4 flex flex-col items-center'>
          <input
            name='firstName'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder='First name'
            className='w-2/3 p-2 border border-gray-200 rounded'
          />
          <input
            name='middleName'
            value={middleName}
            onChange={e => setMiddleName(e.target.value)}
            placeholder='Middle name'
            className='w-2/3 p-2 border border-gray-200 rounded'
          />
          <input
            name='lastName'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            placeholder='Last name'
            className='w-2/3 p-2 border border-gray-200 rounded'
          />
          <input
            name='address'
            value={address}
            onChange={e => setAddress(e.target.value)}
            placeholder='Address'
            className='w-2/3 p-2 border border-gray-200 rounded'
          />
          <input
            name='email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email address'
            className='w-2/3 p-2 border border-gray-200 rounded'
          />
          <div className='bg-white w-2/3 p-2 border border-[gray-200] rounded'>
            <DatePicker
              selected={date}
              onChange={date => setDate(date)}
              className='w-full'
              placeholderText='Date of birth'
            />
          </div>
          <input
            name='password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
            className='w-2/3 p-2 border border-gray-200 rounded'
          />
          <input
            name='passwordConfirm'
            type='password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder='Confirm password'
            className='w-2/3 p-2 border border-gray-200 rounded '
          />
          <div className='flex flex-col items-center mt-4'>
            <button
              type='submit'
              className='w-half p-2 bg-green-500 text-white rounded mt-4'>
              Sign up
            </button>
            <div className='mt-4 text-blue-500'>
              <a href='/login'>Already have an account? Login</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;