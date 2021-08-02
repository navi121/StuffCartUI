using StuffKartProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StuffKartProject.IService
{
    public interface IImageService
    {
        DashBoard Save(DashBoard oImage);
        DashBoard GetSavedDashBoard();
    }
}
