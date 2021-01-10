import React from 'react'
import Spin from './spinner.gif'

const Spinner = () => {
    return (
        <div>
             <img src={Spin}
                  style={{ width: '200px', margin: 'auto', display: 'block' }}
                  alt="loading.." />
        </div>
    )
}
export default Spinner;
