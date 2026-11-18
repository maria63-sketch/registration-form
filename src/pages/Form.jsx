import { Eye, EyeOff, UserRound } from "lucide-react";
import { useState } from "react"

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] =useState(false);
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    
    setMessage("Form submitted successfully!");

    setName("");
    setEmail("");
    setPassword("");
  }

  const checks = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[a-z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password)
  ];

  const isStrong = checks.every(Boolean);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#2d2dff] via-[#5555ff] to-[#8b5cf6] px-4 py-10">

        {/* form */}
      <form 
        onSubmit={handleForm} 
        className="w-full max-w-md">

        <div className="border border-white/50 bg-white rounded-3xl px-6 py-9 sm:px-9 sm:py-10 shadow-2xl"       
        >

            {/* heading */}
          <div className="text-center mb-8">

            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-2xl bg-[#2d2dff]/10" >
              <UserRound size={30} className="text-[#2d2dff]"/>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#2d2dff]">
            Create Account
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              Sign up to get started
            </p>

          </div>
          
            {/* Input fields */}
          <div className="flex flex-col gap-6"></div>

          {/* name */}
          <fieldset className="border border-gray-300 rounded-xl mb-5 px-4 pb-2 pt-1 focus-within:border-[#2d2dff] focus-within:ring-2 focus-within:ring-[#2d2dff]/15 transition-all">

            <legend className="px-2 text-sm text-[#2d2dff] font-medium">
              Name
            </legend>

            <input 
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter"}
              className="w-full text-sm font-medium outline-none bg-transparent py-1"
              required
            />
          </fieldset>
          
           {/* email */}
          <fieldset className="border border-gray-300 rounded-xl mb-5 px-4 pb-2 pt-1 focus-within:border-[#2d2dff] focus-within:ring-2 focus-within:ring-[#2d2dff]/15 transition-all">

            <legend className="px-2 text-sm text-[#2d2dff] font-medium">
              Email
            </legend>

            <input 
              type="email"           
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter"}
              className="w-full text-sm font-medium outline-none bg-transparent py-1"
              required 
            />
          </fieldset>
         

            {/* password */}
          <fieldset className="relative border border-gray-300 rounded-xl mb-5 px-4 pb-2 pt-1 focus-within:border-[#2d2dff] focus-within:ring-2 focus-within:ring-[#2d2dff]/15 transition-all">

            <legend className="px-2 text-sm text-[#2d2dff] font-medium">
                Password
            </legend>

            <div className="flex items-center">
              <input 
                type={showPassword ? "text" : "password"}          
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter"}
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

               {/* password strength */}
          {password.length > 0 && (
            <div>
              <p className={`text-sm font-medium mb-4 ${isStrong
                ? "text-green-600" : "text-red-500"
              }`}>
                  {isStrong ? "Strong Password" : "Weak password" }
              </p>

              <p className="text-xs text-gray-500 mt-2">
                Use 8+ characters, uppercase, lowercase,
                number and special character.
              </p>
            </div>
          )}  

            {/*  submit button */}
            <button 
              type="submit"
              className="w-full bg-[#2d2dff] text-white font-semibold rounded-xl py-3 mt-5 hover:bg-[#2525db] hover:shadow-lg hover:shadow-[#2d2dff]/30 transition-all duration-300 cursor-pointer">
              Create Account
            </button>
                  
                {/* success message */}
              {message && (
                <p className={`text-center text-sm font-medium mt-4 ${
                message.includes("successfully") ? "text-green-600" : "text-red-500"
                }`}>
                {message}
                </p>
              )}             

        </div>
      </form>
   
    </div>
  )
}
