import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import './Datebox.css';

const Datebox = () => {

    const dateArray = [];

    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        const formatedDate = +day +"/"+ month +"/"+ year
        // console.log(formatedDate)
        return formatedDate
    }

    //current date
    const nDate = new Date()

    //6 days after current date
    const pDate = new Date()
    pDate.setDate(pDate.getDate() + 5);
    
    // console.log(formatDate(nDate))
    // console.log(formatDate(pDate))

    const sixDaysAfterCurrentDate = () => {
        for (var i=1; i<=6; i++){
            pDate.setDate(pDate.getDate() + i);
            // console.log(formatDate(pDate));
            dateArray.push(formatDate(pDate))
        }
    }

    sixDaysAfterCurrentDate();

    console.log(dateArray)

    var id = 0;

    return (
        <div className="date-box-wrapper">
            {
                dateArray.map(date=>{
                    return (
                    //      <label className="container"><span className="checkmark"></span> {date}
                    //         <input type="radio" checked="checked" name="radio"/>
                            
                    //     </label>
                        
                        <Checkbox date={date} id={id=id+1}></Checkbox>
                        
                    )
                })
            }

            <button className="custom-date">Select <br /> Custom Date</button>
            
        </div>
    )
}

export default Datebox;
