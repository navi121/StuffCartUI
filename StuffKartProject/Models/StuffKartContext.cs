using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace StuffKartProject.Models
{
    public partial class StuffKartContext : DbContext
    {
        public  StuffKartContext(DbContextOptions<StuffKartContext> options) : base(options)
        {

        }
        public virtual DbSet<CartDetail> CartDetails { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<UserDetail> UserDetails { get; set; }
        public virtual DbSet<DashBoard> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

                optionsBuilder.UseSqlServer("Server=localhost;Database=StuffKart;User ID=sa;password=World@#2021;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<CartDetail>(entity =>
            {
                entity.HasKey(e => new { e.ItemId})
                    .HasName("PK__UserDeta__6F9E65E3D0D59B88");

                entity.Property(e => e.ProductName)
                      .IsRequired()
                      .HasMaxLength(50)
                      .IsUnicode(false);

                entity.Property(e => e.ProductDescription)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Price)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Size)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Role");

                entity.Property(e => e.Admin)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
            
            modelBuilder.Entity<DashBoard>(entity =>
            {
                entity.HasKey(e => new { e.ProductId })
                    .HasName("PK__UserDeta__6F9E65E3D0D59B88");

                entity.ToTable("DashBoard");

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ProductDescription)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Price)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Size)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Image)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<UserDetail>(entity =>
            {
                entity.HasKey(e => new { e.MobileNumber })
                    .HasName("PK__UserDeta__6F9E65E3D0D59B87");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
             
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
