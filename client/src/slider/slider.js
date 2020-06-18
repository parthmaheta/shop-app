import React, {
    Component,
    useEffect,
    useState
} from 'react';
import './slider.css'
import work1 from "./../../../public/img/work-1.jpg"
import work2 from "./../../../public/img/work-2.jpg"
import work3 from "./../../../public/img/work-3.jpg"

export function Slider(props) {
    let [slideIndex, setIndex] = useState(0)

        useEffect(()=>{
           let timeout= setTimeout(() => {
            if (slideIndex == 2)
                setIndex(0)
            else
                setIndex(slideIndex + 1)
        },4000)
        return () => {
            clearTimeout(timeout);
          }
    },[slideIndex])
        
function increment(){
    if(slideIndex==2)
    setIndex(0)
    else
     setIndex(slideIndex+1)
}
function decrement(){
    if(slideIndex==0)
    setIndex(2)
    else
     setIndex(slideIndex-1)
}
return (<div className = "container"id = 'slider' >
        <button className='btn left' onClick={decrement}>&lt;</button>
        <Slide index = {slideIndex}/>
        <button className='btn right' onClick={increment}>&gt;</button>
     </div>)
}

function Slide(props) {
    let imgsrc = [work1, work2, work3]
    return ( < img src = {imgsrc[props.index]}/>)
    }