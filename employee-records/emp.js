// collection of employee's information
const employees = [];

function Employee (name, jobTitle, salary, status) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.salary = salary;
        this.status = status;
        this.newStatus = function(){
            console.log(this.status)
        }
    }


const employee1 = new Employee ('Dasha', 'VSchool', '5000/hr',)
console.log(employee1)

const employee2 = new Employee('Bob', 'Builder', '40/house', "part time")
console.log(employee2)