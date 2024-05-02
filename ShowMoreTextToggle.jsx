import React, { useState } from 'react'

export default function ShowMoreTextToggle(props) {

    const {text} = props;

    const [readMore,setReadMore] = useState(false);

    const truncateText = React.useMemo(() => {
        console.log("this is the calculating");
      return text.slice(0, 30).concat('...');
},[text]);

    const calculateReadMore = ()=>{

        console.log("this has been called");
        return text.slice(0,30);
    }

    const handleReadMore = ()=>{

        setReadMore(!readMore);
    }
  return (
    <div onClick={handleReadMore}>

        {readMore? text : truncateText }

        <span>{readMore? "...less" : "...readMore"} </span>

    </div>
  )
}
