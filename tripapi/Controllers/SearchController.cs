using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace tripapi.Controllers
{
    public class SearchController : Controller
    {
        private const string apiKey = "AIzaSyA9O2LK0b3E7n-21E73qthzFinwsXV3XAU";

        [HttpGet]
        public async Task<IActionResult> Index([FromQuery] string q)
        {
            string url = $"https://maps.googleapis.com/maps/api/place/autocomplete/json?input={q}&types=establishment&location=42.36,-71.044&radius=500&key={apiKey}";
            using (var client = new HttpClient())
            {
                var response = await client.GetStringAsync(url);
                return Json(JsonConvert.DeserializeObject(response));
            }
        }

        [HttpGet]
        public IActionResult Wumbo()
        {
            return Json(new { foo = "wumbo" });
        }
    }
}