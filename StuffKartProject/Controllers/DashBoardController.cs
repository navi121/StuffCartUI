using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Protocols;
using Newtonsoft.Json;
using StuffKartProject.Constant;
using StuffKartProject.IService;
using StuffKartProject.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace StuffKartProject.Controllers
{
    [Route("AddProduct")]
    [ApiController]
    public class DashBoardController : ControllerBase
    {
        private readonly StuffKartContext _context;

        IImageService _imageService = null;

        //public DashBoardController(IImageService imageService)
        //{
        //    _imageService = imageService;
        //}

        public DashBoardController(StuffKartContext context)
        {
            _context = context;

        }
        //public class FileUpload
        //{
        //    public IFormFile files { get; set; }
        //    public string DashBoard { get; set; }
        //}

        [HttpGet]
        public  IEnumerable<DashBoard> GetProductDetails()
        {
            return  _context.Products.ToList();
        }
        
        [HttpPost]
        public async Task<ActionResult<DashBoard>> ProductDetail(DashBoard addproduct)
        {
            _context.Products.Add(addproduct);
            try
            {
               await _context.SaveChangesAsync();
            }
            catch(DbUpdateException)
            {
               return BadRequest(Messages.InvalidContent);
            }
            return StatusCode(200);

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DashBoard>> GetProduct(string ProductName)
        {
            var productDetail =  await _context.Products.FindAsync(ProductName);

            if (productDetail == null)
            {
                return NotFound();
            }

            return productDetail;
        }

        //[HttpPost]
        //public async Task<ActionResult<DashBoard>> SaveFile([FromForm]FileUpload fileObj)
        //{
        //    var value = JsonConvert.SerializeObject(fileObj);
        //    var oImage = JsonConvert.DeserializeObject<DashBoard>(value);
        //    if (fileObj.files.Length > 0)
        //    {
        //        await using(var ms=new MemoryStream())
        //        {
        //            fileObj.files.CopyTo(ms);
        //            var fileBytes = ms.ToArray();
        //            oImage.Image = fileBytes;
        //            oImage = _imageService.Save(oImage);
        //            return StatusCode(200);
        //        }
        //    }
        //    return BadRequest(Messages.InvalidContent);
        //}

        /*[HttpGet]
        public JsonResult GetSavedDashBoard()
        {
            var img = _imageService.GetSavedDashBoard();
            img.Image = this.GetImage(Convert.ToBase64String(img.Image));
            return Json(img);
        }
        public byte[] GetImage(string sBase64String)
        {
            byte[] bytes = null;
            if (!string.IsNullOrEmpty(sBase64String))
            {
                bytes = Convert.FromBase64String(sBase64String);
            }
            return bytes;
        }*/

        //[HttpPost]
        //[Route("save")]
        //public HttpResponseMessage Save()
        //{
        //    IFormFile postedFile = HttpContext.Current.Request.Files[0];
        //}
    }
}










/* [HttpPost]
 public async Task<string> Post([FromForm] FileUpload objFile)

 {
     //DashBoard dash = new DashBoard();
     //dash.Image = new byte[objFile.files.Length];

     //objFile.files.InputStream.Read(dash.Image, 0, objFile.files.Length);
     //return "200";
     //using (var memoryStream = new MemoryStream())
     //{
     //    FileUpload fileObj = new FileUpload();
     //    await fileObj.files.CopyToAsync(memoryStream);
     //    //await FileUpload.files.CopyToAsync(memoryStream);

     //    // Upload the file if less than 2 MB
     //    if (memoryStream.Length < 2097152)
     //    {
     //        var file = new DashBoard()
     //        {
     //            Image = memoryStream.ToArray()
     //        };

     //        _context.Products.Add(file);

     //        await _context.SaveChangesAsync();
     //    }
     //    else
     //    {
     //        ModelState.AddModelError("File", "The file is too large.");
     //    }
     //}
     using (var memoryStream = new MemoryStream())
     {
         BufferFileUpload BF = new BufferFileUpload();
         await BF.fileUploadObj.files.CopyToAsync(memoryStream);
         //await fileUploadObj..CopyToAsync(memoryStream);

         // Upload the file if less than 2 MB
         if (memoryStream.Length < 2097152)
         {
             var file = new DashBoard()
             {
                 Image = memoryStream.ToArray()
             };

             _context.Products.Add(file);

             await _context.SaveChangesAsync();
         }
         else
         {
             ModelState.AddModelError("File", "The file is too large.");
         }
     }

     return "200";
 }*/


























/*public string PostProductDetail([FromForm] FileUpload objFile)
{
    byte[] imageData = ReadFile(.Text);
    //_context.Products.Add(objFile);
    DashBoard dash = new DashBoard();
     //dash.Image = new byte[productDetail.Image.ContentLength];
        dash.Image = objFile.Files;
        //productDetail.Image.InputStream.Read(dash.Image, 0, productDetail.Image.ContentLength);
    try
    {
         _context.SaveChangesAsync();
    }
    catch (DbUpdateException)
    {
         BadRequest(Messages.InvalidContent);
    }

    return "200";
}*/






//[HttpGet("{id}")]
//public string Get(int id)
//{
//    return "value";
//}



/*public void PostProductDetail([FormFrom]FileUpload productDetail) {
            private void Upload(object sender, EventArgs e)
            {
                byte[] bytes;
                using (BinaryReader br = new BinaryReader(productDetail.Image.InputStream))
                {
                    bytes = br.ReadBytes(productDetail.Image.ContentLength);
                }
                string constr = ConfigurationManager.ConnectionStrings["constr"].ConnectionString;
                using (SqlConnection conn = new SqlConnection(constr))
                {
                    string sql = "INSERT INTO tblFiles VALUES(@Name, @ContentType, @Data)";
                    using (SqlCommand cmd = new SqlCommand(sql, conn))
                    {
                        cmd.Parameters.AddWithValue("@Name", Path.GetFileName(productDetail.Image.FileName));
                        cmd.Parameters.AddWithValue("@ContentType", productDetail.Image.ContentType);
                        cmd.Parameters.AddWithValue("@Data", bytes);
                        conn.Open();
                        cmd.ExecuteNonQuery();
                        conn.Close();
                    }
                }

                Response.Redirect(Request.Url.AbsoluteUri);
            }
        }*/
//public void PostProductDetail(object sender, EventArgs e)
//{
//    DashBoard postedFile = productDetail.Image;
//    string filename = Path.GetFileName(postedFile.FileName);


//    string fileExtension = Path.GetExtension(filename);
//    int fileSize = postedFile.ContentLength;

//    if (fileExtension.ToLower() == ".jpg" || fileExtension.ToLower() == ".gif"
//        || fileExtension.ToLower() == ".png" || fileExtension.ToLower() == ".bmp")
//    {
//        Stream stream = postedFile.InputStream;
//        BinaryReader binaryReader = new BinaryReader(stream);
//        Byte[] bytes = binaryReader.ReadBytes((int)stream.Length);


//        string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
//        using (SqlConnection con = new SqlConnection(cs))
//        {
//            SqlCommand cmd = new SqlCommand("spUploadImage", con);
//            cmd.CommandType = CommandType.StoredProcedure;

//            SqlParameter paramImageData = new SqlParameter()
//            {
//                ParameterName = "@ImageData",
//                Value = bytes
//            };
//            cmd.Parameters.Add(paramImageData);


//            con.Open();
//            cmd.ExecuteNonQuery();
//            con.Close();
//        }
//    }
//    else
//    {

//        return BadRequest();

//    }
//}


