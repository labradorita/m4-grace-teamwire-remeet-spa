const getDataFromServer = () => {
    const employeesURL = "https://adalab-teamwire.herokuapp.com/employees"
    fetch(employeesURL)
        .then(resp => resp.json())
        .then(data => console.log(data))
}