import React from 'react'
import { connect  } from 'react-redux'


const mapStateToProps = (state) => ({
  count: state.counter1.count
})



const mapDispatchToProps = (dispatch)=>{

  return { 
    saveInfo: ()=>dispatch({type: "INC_ASYC"}),
    decInfo: ()=>dispatch({type: "INC_ASYC"}),
  

}
}

 function CounterSaga({count,saveInfo,decInfo}) {
   
  

   


  return (
    <div>{count}
    
    <button onClick={saveInfo}>+</button>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterSaga)