import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import './App.css'
import { useState } from 'react';

function App() {
  //js code
  const [Principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [Interest, setInterest] = useState(0)
  const [isprinciple, setisprinciple] = useState(true)
  const [israte, setisRate] = useState(true)
  const [isyear, setisYear] = useState(true)

  const validatedata = (e) => {
    const { name, value } = e.target
    // console.log(name,value);
    // console.log(!!value.match(/^[0-9]+$/)); //!!-to convert into boolean
    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {
      if (name === 'Principle') {
        setPrinciple(value)
        setisprinciple(true)
      }

      else if (name === 'rate') {
        setRate(value)
        setisRate(true)
      }

      else if (name === 'year') {
        setYear(value)
        setisYear(true)
      }


    }
    else if (name === 'Principle') {
      setPrinciple(value)
      setisprinciple(false)

    }

    else if (name === 'rate') {
      setRate(value)
      setisRate(false)
    }

    else if (name === 'year') {
      setYear(value)
      setisYear(false)
    }
  }
  const handleCalculate=(e)=>{
    e.preventDefault()
    if(!Principle || !rate||!year){
      alert("please complete the form")
    }
    else{

      setInterest(Principle*rate*year/100)
    }
  }

  const handleReset=(e)=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setisprinciple(true)
    setisYear(true)
    setisRate(true)
    
  }
  return (
    <div style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center w-100 bg-success'>
      <div className='bg-light p-5 rounded' style={{ width: "500px" }}>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest Easily</p>

        <div style={{ height: "30vh" }} className='d-flex justify-content-center align-items-center w-100 bg-warning flex-column shadow' >

          <h1>₹ {Interest}</h1>
          <p>Total simple interest</p>
        </div>





        <form className='mt-5' onSubmit={ handleCalculate}>


          <div className='mb-3'>
            <TextField name='Principle' value={Principle || ""} onChange={(e) => validatedata(e)} className='w-100' id="outlined-basic" label="₹ Principle Amount" variant="outlined" />

          </div>
          {!isprinciple &&

            <div><p className="text-danger fw-bold">*invalid data</p></div>
          }
          <div className='mb-3'>
            <TextField name='rate' value={rate || ""} onChange={(e) => validatedata(e)} className='w-100' id="outlined-basic" label="Rate of interest (p.a)%" variant="outlined" />

          </div>

          {!israte &&

            <div><p className="text-danger fw-bold">*invalid data</p></div>
          }

          <div className='mb-3'>
            <TextField name='year' value={year || ""}onChange={(e) => validatedata(e)} className='w-100' id="outlined-basic" label="Year (Y)" variant="outlined" />

          </div>
          {!isyear &&

<div><p className="text-danger fw-bold">*invalid data</p></div>
}
          

          <div className='mt-5'>
            <Stack direction="row" spacing={2}>
              <Button  type='submit' disabled={isprinciple && israte && isyear?false:true} variant="contained" style={{ height: "60px", width: "200px" }}>Calculate</Button>
              <Button onClick={handleReset} className='bg-success' variant="outlined" style={{ height: "60px", width: "200px" }}>Reset</Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App