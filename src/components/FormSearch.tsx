import React, { useState, useEffect } from 'react'
import { getSuggestions, getProducts } from '../services/api'
import { IProduct, ISearchProducts, TBrand } from '../interfaces'

type Props = {
  onSearch: (products: ISearchProducts) => void,
  selectedBrand: TBrand
}

const FormSearch:React.FC<Props> = ({onSearch, selectedBrand}: Props) => {

  const [value, setValue] = useState<string>('')
  const [focused, setFocused] = useState<boolean>(false)
  const [suggestions, setSuggestions] = useState<IProduct[]>([])
  const [brand, setBrand] = useState<TBrand>('')

  useEffect(() => {
    setBrand(selectedBrand)
  },[selectedBrand])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value
    setValue(value)
    if (value.length<3) {
      setSuggestions([])
    } else {
      getSuggestions(value).then((products: IProduct[] = []) => {
        setSuggestions(products)
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

    getProducts(value).then((products: ISearchProducts) => {
      onSearch(products)
    })

    setSuggestions([])
  }

  const selectProduct = ({brand, article}: {brand: TBrand, article: string}) => {
    setBrand(brand)
    setValue(article)
    setSuggestions([])

    getProducts(article, brand).then((products: ISearchProducts) => {
     //console.log(products);
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
            {suggestions.map((product: IProduct)=> {
              return <div className="suggestion_item" key={product.id} onClick={() => selectProduct(product)} ><b>{product.article}</b> {product.brand} {product.name} </div>
            })}
          </div>
        }
      </div>
    </form>
  )
}

export default FormSearch