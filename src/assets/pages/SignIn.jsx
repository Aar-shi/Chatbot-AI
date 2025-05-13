import React from 'react'

const SignIn = () => {
  return (
    <div className="signup-container h-full  w-full  flex justify-center items-center  ">
      <div className="form-container border rounded-xl p-5 h-5/6 w-1/3 flex justify-center items-center">
      <form
            action=""
            class="p-4 flex-col text-[0.5em] gap-10  max-w-sm bg-transparent rounded-x1 w-25 text-foreground flex justify-center items-center min-h-fit"
          >
            <h1 className="text-[4.5em] flex justify-center items-center text-white font-title mb-5 font-bold text-foreground">
              Sign In
            </h1>

            <input
              type="email"
              className="border-b p-2 text-[2.5em] h-[40px] font-body text-white  w-full bg-transparent placeholder:text-foreground border-foreground border-opacity-38"
              placeholder="Email"
            />

            <input
              type="password"
              className="border-b p-2 text-[2.5em] text-white h-[40px] font-body w-full bg-transparent placeholder:text-foreground border-foreground border-opacity-38"
              placeholder="Password"
            />
<p className="text-[2.5em] gap-4 text-white font-body">
            <a href="/login" className="hover:underline font-title">
                Forgot password?
              </a>
              </p>

            <p className="text-[2.5em] gap-4 text-white font-body">
              New to ChatNova?{" "}
              <a href="/login" className="hover:underline font-title">
                Sign up
              </a>
            </p>
            <button className='gap-4 border text-white text-[2.5em] p-2 pr-4 pl-4 hover:bg-slate-400'>Sign up </button>
            </form>
    </div>
    </div>
  )
}

export default SignIn
