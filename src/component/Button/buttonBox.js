import Button from './button';
import './buttonBox.css';

function BoxButton(){
    let arr=[0,1,2,3,4,5,6,7,8];
    return<div className='boxButton'>
        {arr.map((i)=>{
           return <div key={i}><Button /></div>
        })}
        <div className='div'></div>
        <Button/>
    </div>
}

export default BoxButton;
