// collection of employee's information
const employees = [];

function Employee(name, jobTitle, salary, status="Full Time") {
        this.name = name,
        this.jobTitle = jobTitle,
        this.salary = salary,
        this.status = status,
        this.form = function printEmployeeForm(){
            console.log(this.name + " " +  this.jobTitle + " " + this.salary + " " + this.status)
            employees.push() // adds employee record into an employee array
    }
}

// for loop to add employee objects to an array 
for(const i = 0; i < employees.length; i++){
    const employee1 = new Employee ('Lynn', 'Painter', '5000/hr',)
    employee1.form();

    const employee2 = new Employee ('Bob', 'Builder', '40/hr', "Part Time")
    employee2.form();

    const employee3 = new Employee ('Jeff', 'Cook', '20,000/ hr', "Contract")
    employee3.form()

    employees.push(employee1);
    employees.push(employee2);
    employees.push(employee3);
}

console.log(employees)