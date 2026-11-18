import { Eye, EyeOff } from "lucide-react";
import { useState } from "react"

export default function Form() {
  const [name, seName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] =useState(false);

  const handleForm = (e) => {
    e.preventDefault();  
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600 px-4 py-10">

        {/* form */}
      <form 
        onSubmit={handleForm} 
        className="py-5 sm:py-6 mt-10">
        <div className="w-full max-w-md border border-[#2d2dff]/20 bg-white rounded-3xl px-6 py-9 sm:px-9 sm:py-10 shadow-[0_12px_35px_rgba(45,45,255,0.10]"       
        >

            {/* heading */}
          <div className="text-center mb-9">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#2d2dff]">
            Sign Up
            </h1>
          </div>
            {/* Input fields */}
          <div className="flex flex-col gap-6"></div>

          {/* name */}
          <fieldset className="border border-[#2d2dff]/40 rounded-xl mb-5 px-4 pb-2 pt-1 focus-within:border-[#2d2dff] focus-within:ring-2 focus-within:ring-[#2d2dff]/10">
            <legend className="px-2 text-sm text-[#2d2dff] font-medium">
              Name
            </legend>

            <input 
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => seName(e.target.value)}
            className="w-full text-sm font-medium outline-none bg-transparent py-1"
            required
            />
          </fieldset>
          
           {/* email */}
          <fieldset className="border border-[#2d2dff]/40 rounded-xl mb-5 px-4 pb-2 pt-1 focus-within:border-[#2d2dff] focus-within:ring-2 focus-within:ring-[#2d2dff]/10">
            <legend className="px-2 text-sm text-[#2d2dff] font-medium">
              Email
            </legend>

            <input 
            type="email"           
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-sm font-medium outline-none bg-transparent py-1"
            required 
            />
          </fieldset>
         

               {/* password */}
            <fieldset className="relative border border-[#2d2dff]/40 rounded-xl mb-5 px-4 pb-2 pt-1 focus-within:border-[#2d2dff] focus-within:ring-2 focus-within:ring-[#2d2dff]/10 transition">
              <legend className="px-2 text-sm text-[#2d2dff] font-medium">
                Password
              </legend>

              <div className="flex items-center">
                <input 
                type={showPassword ? "text" : "password"}          
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-sm font-medium outline-none bg-transparent py-1"
                required
                />

                  {/* show password button & EyeIcons */}
                <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="transition-colors cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
                >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </fieldset>

            <p className={`font-medium ${password.length < 6
                ? "text-amber-700" : "text-green-600"
              }`}>
                {password.length === 0 ? "" : password.length < 6
                ? "Weak" : "Strong" }
              </p>
                                 
            {/*  submit button */}
            <button 
              type="submit"
              className="w-full bg-[#2d2dff] text-white font-semibold rounded-xl py-3 mt-2 hover:bg-[#2525db] hover:shadow-md transition-all duration-300 cursor-pointer">
              Sign Up
            </button>

        </div>
      </form>
    </div>
  )
}
