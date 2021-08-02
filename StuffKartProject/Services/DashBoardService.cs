using StuffKartProject.IService;
using StuffKartProject.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace StuffKartProject.Services
{
    public class DashBoardService : IImageService
    {
        private readonly StuffKartContext _context;

        public DashBoardService(StuffKartContext context)
        {
            _context = context;
        }
        public DashBoard GetSavedDashBoard()
        {
            return _context.Products.SingleOrDefault();
        }

        public DashBoard Save(DashBoard oImage)
        {
            _context.Products.Add(oImage);
            _context.SaveChanges();
            return oImage;
        }

    }
}
