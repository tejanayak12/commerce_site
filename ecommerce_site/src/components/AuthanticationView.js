import React, { useEffect, useState } from 'react'
import { useUser } from '../ProductContext/UserProvider';
import { useHistory } from 'react-router-dom';

function AuthanticationView({ isLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const title = isLogin ? 'Login' : 'Signup';
  const history = useHistory();

  const { doLogin, doSignUp, error, ClearErros , user } = useUser();

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

  useEffect(() => {
    if(user){
      history.push("/")
    }
  },[user])

  return (
    <form onSubmit={HandelAuthantication} className='bg-gray-900 max-w-full py-18 mx-auto'>
      <div className="flex min-h-full flex-1 flex-col justify-center px-20 py-20 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <img
            className="mx-auto h-40 w-auto rounded-md"
            src="https://scontent-tir3-1.xx.fbcdn.net/v/t39.30808-6/311019739_477617561090185_8854647639814127260_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=GGxJ_IJBVTkAX8bYhSM&_nc_ht=scontent-tir3-1.xx&oh=00_AfCUtANPKT67GmRfLuy28Q27EQM7Ea9q98UbwhnV-lwAWg&oe=64F8F7AE"
            alt="Your Company"
          />
          <h2 className="mt-4 text-white text-2xl font-bold leading-9 tracking-tight text-gray-900 text-center p-3">
            {title}
          </h2>

        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 max-w-full text-white">
              Email Address
            </label>
            <div className="mt-2">
              <input
                type="email"
                placeholder='Please Enter Your Email...'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-700 sm:text-sm sm:leading-6 p-3"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mt-2">
              <label htmlFor="password" className="block text-white font-medium leading-6">
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-700 sm:text-sm sm:leading-6 p-3"
              />
            </div>
          </div>

          <div className='text-center'>
            <button
              className="flex max-w-xs justify-center rounded-md bg-slate-700 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-3"
            >
              {title}
            </button>
            {error && <div className='text-red-300 bg-red-900 mt-2 text-center border-b-2 border-red-700'>{error}</div>}
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