import React from 'react'

const Box = ({box}) => {
  return (
    box.map((item)=>{
        let boxStyle = {
            width: `${item.width}px`,
            height: `${item.height}px`,
            backgroundColor: item.color,
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            borderRadius: "10px",
            margin: "20px"
        }
        return <div key={item.id} style={boxStyle}></div>
    })
  )
}

export default Box