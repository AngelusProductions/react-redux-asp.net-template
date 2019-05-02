using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using Newtonsoft.Json.Linq;
using Remotion.Linq.Parsing.Structure.IntermediateModel;

namespace ReactReduxBoilerPlate.Controllers
{
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private static DataTable MyTable()
        {
            DataTable dataTable = new DataTable();
            const string connString = "Data Source=turtle;" +
                                      "Initial Catalog=Playground; " +
                                      "Integrated Security=False;" +
                                      "User ID=sa;" +
                                      "Password=The leatherback is the largest species of sea turtle. Measuring 2–3 meters (6–9 ft) in length";
            const string query = "SELECT * FROM Employees";
            SqlConnection conn = new SqlConnection(connString);
            SqlCommand cmd = new SqlCommand(query, conn);
            conn.Open();
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dataTable);
            conn.Close();
            da.Dispose();
            return dataTable;
        }

        public static string Jsonify(DataTable table)
        {
            var jsonString = new StringBuilder();
            if (table.Rows.Count > 0)
            {
                jsonString.Append("[");
                for (int i = 0; i < table.Rows.Count; i++)
                {
                    jsonString.Append("{");
                    for (int j = 0; j < table.Columns.Count; j++)
                    {
                        string columnName = table.Columns[j].ColumnName.ToString();
                        string columnNameCamelCased = columnName.Substring(0, 1).ToLower() + columnName.Substring(1);
                        if (j < table.Columns.Count - 1)
                        {
                            
                            jsonString.Append("\"" + columnNameCamelCased + "\":" + "\"" + table.Rows[i][j].ToString() + "\",");
                        }
                        else if (j == table.Columns.Count - 1)
                        {
                            jsonString.Append("\"" + columnNameCamelCased + "\":" + "\"" + table.Rows[i][j].ToString() + "\"");
                        }
                    }
                    if (i == table.Rows.Count - 1)
                    {
                        jsonString.Append("}");
                    }
                    else
                    {
                        jsonString.Append("},");
                    }
                }
                jsonString.Append("]");
            }
            return jsonString.ToString();
        }

        [HttpGet]
        public string GetEmployees()
        {   
            return Jsonify(MyTable());
        }

        //[HttpGet("[action]/{id}")]
        //public string GetEmployee(long id)
        //{
        //    string searchExpression = $"ID = ${id}";
        //    DataRow foundRow = MyTable().Select(searchExpression)[0];
        //    Debugger.Break();
        //    //return Jsonify(foundRow.ToString());
        //}

        [HttpPost]
        public IActionResult AddEmployee([FromBody]JObject datum)
        {   
            JObject json = JObject.Parse(datum);
            Debugger.Break();

            //datum.Id = MyTable().Columns.Count + 1;
            //DataTable dataTable = new DataTable();
            //const string connString = "Data Source=turtle;" +
            //                          "Initial Catalog=Playground; " +
            //                          "Integrated Security=False;" +
            //                          "User ID=sa;" +
            //                          "Password=The leatherback is the largest species of sea turtle. Measuring 2–3 meters (6–9 ft) in length";
            //string query = "INSERT INTO Employees (";
            //var i = 0;
            //Array properties = datum.GetType().GetProperties();
            //foreach (var property in datum.GetType().GetProperties())
            //{
            //    if (i < properties.Length)
            //    {
            //        query += $"{property.Name}, ";
            //    }
            //    else
            //    {
            //        query += $"{property.Name}) VALUES (";
            //    }
            //}
            //var j = 0;
            //Array values = datum.GetType().GetFields();
            //Debugger.Break();
            //foreach (var value in values)
            //{
            //    if (i < values.Length)
            //    {
            //        query += $"\'${value.ToString()}\', ";
            //    }
            //    else
            //    {
            //        query += $"\'${value.ToString()}\');";
            //    }
            //}
            //Debugger.Break();
            //foreach (var attribute in datum.)
            //SqlConnection conn = new SqlConnection(connString);
            //SqlCommand cmd = new SqlCommand(query, conn);
            //conn.Open();
            //SqlDataAdapter da = new SqlDataAdapter(cmd);
            //da.Fill(dataTable);
            //conn.Close();
            //da.Dispose();
            return Ok(new
            {
                success = true,
                returncode = "200"
            });
        }

        //public class Employee
        //{
        //    public int Id { get; set; }
        //    public string Name { get; set; }
        //    public string Job { get; set; }
        //    public string Location { get; set; }
        //    public string Email { get; set; }
        //    public string CatchPhrase { get; set; }
        //}
    }
}
