using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Identity.Web;
using TestUsersList;
using TestUsersList.Services;
using App.DAL.MySLQ;
using app.DAL.Repository.Impl;
using app.DAL.Repository;
using app.DAL;
using App.DAL;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var db = builder.Configuration["ConnectionStrings:db"];
builder.Services.UseSqlServer(db);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IUsersService, UsersService>();
builder.Services.AddScoped<UserRepository>();


builder.Services.AddCors(opt =>
{
    opt.DefaultPolicyName = "default";
    opt.AddDefaultPolicy(b =>
    {
        b.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
    });
});

var app = builder.Build();

using(var scope = app.Services.CreateScope())
{
    var sc = scope.ServiceProvider.GetService<DataContext>(); //            Database.Migrate();
    await sc.Database.MigrateAsync().ConfigureAwait(false);
}

app.UseMigrationsEndPoint();
app.UseSwagger();
app.UseSwaggerUI();

//app.UseHttpsRedirection();
app.UseCors("default");
app.UseAuthorization();

app.MapControllers();

app.Run();
