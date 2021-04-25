import React from 'react'

type Props = {
  showMore: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ShowMore:React.FC<Props> = ({showMore}: Props) => {
  return (
    <div style={{width: '100%', textAlign: 'center'}}>
      <button type="button" onClick={showMore} className="btn btn-primary">Показать еще</button>
    </div>
    
  )
}

export default ShowMore