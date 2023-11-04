import React from "react";
const DailyExpenses=()=>{
      return(
        <form>
            <h3>DailyExpenses</h3>
          <label htmlFor="money">Enter Money</label>
            <input type="money" id="money"/><br/>
            <label htmlFor="discription">Add Discription</label>
            <input type="discription" id="discription"/><br/>
            <label htmlFor="category">Choose Category</label>
            <select htmlFor="category" >
<option value="food">Food</option>
<option value="petrol">Petrol</option>
<option value="salary">Salary</option>

</select>
        </form>
      )
}
export default DailyExpenses