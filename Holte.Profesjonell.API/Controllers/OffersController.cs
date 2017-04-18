using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Holte.Profesjonell.API.Controllers
{
    [RoutePrefix("api/Offers")]
    public class OffersController : ApiController
    {
        [Authorize]
        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok(Offer.CreateOffers());
        }

        public class Offer
        {
            public Guid OfferId { get; set; }
            public string CompanyName { get; set; }
            public string OfferDescription { get; set; }

            public static List<Offer> CreateOffers()
            {
                List<Offer> offerList = new List<Offer>
                {
                    new Offer {OfferId = Guid.NewGuid(), CompanyName = "Taiseer Joudeh", OfferDescription = "Some description 1"},
                    new Offer {OfferId = Guid.NewGuid(), CompanyName = "Ahmad Hasan", OfferDescription = "Some description 2"},
                    new Offer {OfferId = Guid.NewGuid(),CompanyName = "Tamer Yaser", OfferDescription = "Some description 3"},
                    new Offer {OfferId = Guid.NewGuid(),CompanyName = "Lina Majed", OfferDescription = "Some description 4"},
                    new Offer {OfferId = Guid.NewGuid(),CompanyName = "Yasmeen Rami", OfferDescription = "Some description 5"}
                };

                return offerList;
            }
        }
    }
}