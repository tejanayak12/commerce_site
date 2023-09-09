import React, { useEffect, useState } from 'react'
import { useUser } from '../ProductContext/UserProvider';

function AuthanticationView({ isLogin }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const title = isLogin ? 'Login' : 'Signup';

  const { doLogin, doSignUp, error, ClearErros } = useUser();

  const HandelAuthantication = (event) => {
    event.preventDefault();
    console.log(":: HandelAuthantication  ::", { doLogin, doSignUp, error });
    (isLogin ? doLogin : doSignUp)(email, password);
    /*
    if(isLogin){
      doLogin(email,password);
    }else {
      doSignUp(email,password)
    }
    */
  };

  useEffect(() => { }, []) // ComponentdidMount (Invoke only once after Mounted)

  useEffect(() => {
    ClearErros();
  }, [isLogin]); // Work as ComponentDidUpdate (invoke WhenEver isLogin Prop Change);



  return (
    <form onSubmit={HandelAuthantication}>

      <h2> {title} </h2>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {error && <div className='text-red-500 p-2 m-2'>{error}</div>}
          <img
            className="mx-auto h-40 w-auto"
            src="https://scontent-tir3-1.xx.fbcdn.net/v/t39.30808-6/311019739_477617561090185_8854647639814127260_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=GGxJ_IJBVTkAX8bYhSM&_nc_ht=scontent-tir3-1.xx&oh=00_AfCUtANPKT67GmRfLuy28Q27EQM7Ea9q98UbwhnV-lwAWg&oe=64F8F7AE"
            alt="Your Company"
          />
          <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {title}
          </h2>

        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                placeholder='Please Enter Your Email...'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-700 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">

              </div>
            </div>
            <div className="mt-2">
              <input
                type="password"
                placeholder='Please Enter Your Password...'
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-700 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              className="flex w-full justify-center rounded-md bg-slate-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {title}
            </button>
          </div>


          <p className="mt-10 text-center text-sm text-gray-500">
            <a href="/login" className="font-semibold leading-6 text-slate-700 hover:text-slate-900">
            </a>
          </p>
        </div>
      </div>
    </form>
  )
}

export default AuthanticationView;