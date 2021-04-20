import React, { useState } from 'react'
import { getSuggestions, getProducts } from '../services/api'

const InputSearch:React.FC<any> = ({onSearch}: any) => {

  const [value, setValue] = useState('')
  const [focused, setFocused] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [article, setArticle] = useState('')
  const [brand, setBrand] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (e.target.value.length<3) {
      setSuggestions([])
    } else {
      getSuggestions(e.target.value).then((product: any) => {
        setSuggestions(product)
      })
    }
  }

  const onFocus = () => {
    setFocused(true)
  }
  const onBlur = () => {
    setFocused(false)
  }

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSuggestions([])
  }

  const selectProduct = (product: any) => {
    setArticle(product.article)
    setBrand(product.brand)
    setValue(product.article)
    setSuggestions([])

    getProducts(product.article, product.brand).then((products: any) => {
     // console.log(products);
      onSearch(products)

    })
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
    <form className="jss22" onSubmit={onSubmit}>
      <div className="MuiFormControl-root MuiTextField-root jss23 MuiFormControl-marginNormal ">
        <label className={labelRootClass} htmlFor="search">Поиск детали</label>
        <div className={inputRootBaseClass}>
          <input id="search" name="email" type="text" className="MuiInputBase-input MuiOutlinedInput-input " 
            value={value} 
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            />
          <fieldset aria-hidden="true" className="jss54 MuiOutlinedInput-notchedOutline">
            <legend className={legendClass}>
              <span>Поиск детали</span>
            </legend>
          </fieldset>
        </div>
        
        {brand && 
          <div className="mt-2">
            Бренд: <b>{brand}</b>
          </div>
        }

        {suggestions.length>0 && 
          <div className="suggestion_block">
            {suggestions.map((product: any)=> {
              return <div className="suggestion_item" key={product.id} onClick={() => selectProduct(product)} ><b>{product.article}</b> {product.brand} {product.name} </div>
            })}
          </div>
        }
      </div>
    </form>
  )
}

export default InputSearch