import { useCallback, useState, useEffect, useRef } from "react"


function App() {
  const [length, setLength] = useState(8)

  const [numberAllowed, setNumberAllowed] = useState(false)

  const [charAllowed, setCharAllowed] = useState(false)

  const [password, setPassword] = useState("")



  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*_-+=[]{}~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length) + 1
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, charAllowed, numberAllowed, setPassword])

  //useRef hook
  const passwordRef = useRef(null)

  const [copied, setCopied] = useState(false)

  const copyPasswordToClipBord = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,64)
    window.navigator.clipboard.writeText(password)

    setCopied(true)
    setTimeout(()=> setCopied(false), 1000)
  }, [password,copied])

  
  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed,passwordGenerator])

  return ( 
    <>
      <div className="justify-center flex my-8 text-orange-500 bg-gray-700 pb-8 w-xl rounded-2xl">
        <div className="">
          <h1 className="text-white text-center mb-3 mt-4">Password Generator</h1>
  
          <div className="shadow">
            <input
             type="text"
             placeholder="password"
             className="text-black border w-md rounded-l-lg p-2 shadow mb-4 bg-gray-400 outline-none" 
             value={password}
             readOnly
             ref={passwordRef}
            />
            <button className= {`p-2 text-center rounded-r-lg text-white outline-none ${copied ? "bg-green-500 hover:bg-green-600" : "bg-blue-600 hover:bg-blue-700"}`}
              id="copy"
              onClick={copyPasswordToClipBord}
             >
              copy
            </button>
            <div className="flex flex-nowrap justify-between">
              <div className="gap-5 flex flex-nowrap justify-between align-middle">
                <input
                  type="range"
                  value={length}
                  min= {6}
                  max= {100}
                  id="range"
                  className="cursor-pointer"
                  onChange={(e)=> {setLength(e.target.value)}}
                />
                <label For="range" className="">
                  Length: {length}
                </label>
              </div>
  
              <div className="gap-2 flex flex-nowrap ">
                <label
                  For="number"
                  className="ml-4"
                  >
                   Number
                </label>
                <input
                    type="checkbox"
                    id="number" 
                    defaultChecked= {numberAllowed}
                    className=""
                    onChange={()=>{
                      setNumberAllowed((prev)=> !prev)
                    }}
                />

              </div>
              <div className="gap-2 flex flex-nowrap">
                <label
                  For="char"
                  className="ml-4"
                  >
                  Character
                </label>
                <input
                 type="checkbox"
                 id="char" 
                 onChange={()=>{
                  setCharAllowed((prev)=> !prev)
                 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
