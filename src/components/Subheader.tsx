import React from 'react';



const Subheader:React.FC = ({children}) => {

  return (
    <div id="kt_subheader" className="subheader py-2 py-lg-4 subheader-solid">
      <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <div className="d-flex align-items-center flex-wrap mr-1">
          <div className="d-flex align-items-baseline mr-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Subheader

