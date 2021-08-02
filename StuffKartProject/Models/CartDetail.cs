using System;
using System.Collections.Generic;

#nullable disable

namespace StuffKartProject.Models
{
    public partial class CartDetail
    {
        public int ItemId { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public int Price { get; set; }
        public char Size { get; set; }
    }
}
