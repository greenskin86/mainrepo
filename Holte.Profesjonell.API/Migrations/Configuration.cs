using Microsoft.AspNet.Identity.EntityFramework;

namespace Holte.Profesjonell.API.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Holte.Profesjonell.API.Models.AuthContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(Holte.Profesjonell.API.Models.AuthContext context)
        {
            context.Users.AddOrUpdate(
                p => p.UserName,
                new IdentityUser
                {
                    UserName = "green"
                });
        }
    }
}
