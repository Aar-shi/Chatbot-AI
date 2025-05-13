import React from 'react'

const SignUp = () => {
  return (
    <div className="signup-container h-full  w-full  flex justify-center items-center  ">
      <div className="form-container border rounded-xl p-10 h-fit w-fit flex justify-center items-center">
        <form
          action=""
          class="p-4 flex-col text-[1em] gap-10  max-w-sm bg-transparent rounded-x1 w-25 text-foreground flex justify-center items-center min-h-fit"
        >
          <h1 className="text-[2.5em] text-white mb-5 font-bold text-foreground font-title">
            Sign Up
          </h1>

          <input
            type="email"
            className="border-b text-[1.0em] p-2 h-[40px] w-full font-body bg-transparent placeholder:text-foreground border-foreground border-opacity-38"
            placeholder="Email"
          />

          <input
            type="password"
            className="border-b p-2 text-[1.0em] text-white h-[40px] w-full font-body bg-transparent placeholder:text-foreground border-foreground border-opacity-38"
            placeholder="Password"
          />

          <input
            type="password"
            className="border-b p-2 h-[40px] text-[1.0em] text-white w-full bg-transparent placeholder:text-foreground border-foreground border-opacity-38"
            placeholder="Confirm Password"
          />

          <p className="text-white font-body">
            Already Have an Account?{" "}
            <a href="/login" className="hover:underline font-title text-white">
              Sign In
            </a>
          </p>
          <button className='border text-white p-2 text-[1.0em] pr-4 pl-4 rounded-xl hover:bg-slate-400'>Sign In </button>
        </form>
      </div>
    </div>

  )

}

export default SignUp
