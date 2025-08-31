import useCurrencyInfo from './hooks/useCurrencyInfo'

import { useState } from 'react'
import { InputBox } from './component'

function App() {
  let [amount , setAmount] = useState(0) // for the set amount 
  const [from , setFrom] = useState("usd") // default from value 
  const [to , setTo] = useState("inr")
  let [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setTo(from)
    setFrom(to)
  }
  let amountValue = amount * currencyInfo[to]
  // const convert = (amount) => {
  //   setConvertedAmount(amount)
  //   console.log(amountValue)
  //   return setConvertedAmount(amountValue)
  // }
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{
      backgroundImage: `url(https://thumbs.dreamstime.com/b/world-map-currency-symbols-bright-light-center-dark-blue-background-digital-world-map-illuminated-395182615.jpg)`
    }}
    >
        <div className='w-full'>
            <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
                <form onSubmit={(e)=> {
                  e.preventDefault();
                }}>
                    <div className='w-full mb-1'>
                      <InputBox 
                          label = "From"
                          amount={amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setFrom(currency) }
                          selectCurrency= {from}
                          onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className='relative w-full h-0.5 mb-1 bottom-7 right-14'>
                      <button 
                        type='button'
                        className='absolute left-1/2 translate-x-1/2 translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer'
                        onClick={swap}
                      >
                        swap
                      </button>
                    </div>
                    <div className='w-full mb-1'>
                      <InputBox 
                          label = "To"
                          amount={amountValue}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setTo(currency) }
                          selectCurrency= {to}
                          
                        />
                      
                    </div>
                    <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
                      convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default App
