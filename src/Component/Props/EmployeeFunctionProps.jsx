
function EmployeeFunctionProps(props){
    const {name, email, company, empid, designation, address} = props
    return(
        <div style={{backgroundColor:'skyblue', margin:15}}>
            <h2>Hello Employee</h2>
            <h3>Full Name : {name}</h3>
            <h3>Email : {email}</h3>
            <h3>Company : {company}</h3>
            <h3>Empid : {empid}</h3>
            <h3>Designation : {designation}</h3>
            <h4>Address : {address.add1}, {address.add2}, {address.city}, {address.state} - {address.pinCode}</h4>
            
        </div>
    )

}

export default EmployeeFunctionProps;