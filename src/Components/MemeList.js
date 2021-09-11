/**
* Returns the data(json content) and filter url & name
**/
import React from 'react';

const ListStyle = {  padding:"0.5rem", align:"left"};
const MemeList = ({memeList=[]}) => {
  return (
    <>
    { memeList.map((data,index) => {
        if (data) {
          return (
            <div align="left">
              <h3 style={ListStyle}><img src={data.url} width="100" height="100"></img>{data.name}(<a href="{data.url}" target={'_blank'} rel="noopener noreferrer external">{data.url}</a>)</h3>
            </div>
    	   )	
    	 }
    	 return null
    }) }
    </>
  );;
}


export default MemeList