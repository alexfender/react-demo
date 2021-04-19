import React, {  useState } from 'react'


const InputSearch = () => {

  const [value, setValue] = useState('')
  const [focused, setFocused] = useState(false)

  const onFocus = () => {
    setFocused(true)
  }
  const onBlur = () => {
    setFocused(false)
  }

  let labelRootClass = "MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
  let inputRootBaseClass = "MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
  let legendClass = "jss56"

  if (focused || value) {
    labelRootClass += " MuiInputLabel-shrink"
  }

  if (focused) {
    labelRootClass += " Mui-focused"
    inputRootBaseClass += " Mui-focused"
    legendClass += " jss57"
  }

  if (value) {
    labelRootClass += " MuiFormLabel-filled"
    legendClass += " jss57"
  }

  
  return (
    <div className="MuiFormControl-root MuiTextField-root jss23 MuiFormControl-marginNormal ">
      <label className={labelRootClass} htmlFor="search">Поиск детали</label>
      <div className={inputRootBaseClass}>
        <input id="search" name="email" type="text" className="MuiInputBase-input MuiOutlinedInput-input " 
          value={value} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          />
        <fieldset aria-hidden="true" className="jss54 MuiOutlinedInput-notchedOutline">
          <legend className={legendClass}>
            <span>Поиск детали</span>
          </legend>
        </fieldset>
      </div>
    </div>
  )
}

export default InputSearch