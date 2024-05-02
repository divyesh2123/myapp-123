import React from 'react'

function DisplayDataForChild(props) {

    console.log(props);
  return (
    <div>DisplayDataForChild</div>
  )
}

export default React.memo(DisplayDataForChild);
