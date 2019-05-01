using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ReactReduxBoilerPlate.Controllers
{
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private static List<Employee> Employees = new List<Employee>()
        {
            new Employee() { Id = 1, Name = "Alex", Job = "Wiz Kid", Location = "Siberia", Email = "alexb@nesurvey.com", CatchPhrase = "OK, here's what I will say..." },
            new Employee() { Id = 2, Name = "Ben", Job = "Codemaster Lv. 11", Location = "Black Sea", Email = "benc@nesurvey.com", CatchPhrase = "(Bizarre comment no one know how to respond to)"},
            new Employee() { Id = 3, Name = "Corey", Job = "Codemaster Lv. 12", Location = "Gulag", Email = "coreya@nesurvey.com", CatchPhrase = "I'm a dude, he's a dude, she's a dude, and we're all dudes, yeah"},
            new Employee() { Id = 4, Name = "John", Job = "Boss Man", Location = "Everywhere", Email = "johnr@nesurvey.com", CatchPhrase = "Hey I'm from LA, look at me"},
            new Employee() { Id = 5, Name = "Omkar", Job = "Office Beard Reserve", Location = "Black Sea", Email = "omkarp@nesurvey.com", CatchPhrase = "No, don't do that again"},
            new Employee() { Id = 6, Name = "Will", Job = "Q", Location = "Black Sea", Email = "willb@nesurvey.com", CatchPhrase = "Vape lyfe"}
        };

        [HttpGet]
        public List<Employee> GetEmployees()
        {
            return Employees;
        }

        [HttpGet("[action]/{id}")]
        public Employee GetEmployee(long id)
        {
            return Employees.Find((e) => e.Id == id);
        }

        [HttpPost]
        public IActionResult AddEmployee([FromBody]Employee datum)
        {
            datum.Id = Employees.Count + 1;
            Employees.Add(datum);
            return Ok(new
            {
                success = true,
                returncode = "200"
            });
        }

        public class Employee
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Job { get; set; }
            public string Location { get; set; }
            public string Email { get; set; }
            public string CatchPhrase { get; set; }
        }

    }
}
