﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace HSconnect.Models
{
	public class Provider
	{
		public int ProviderId {get; set;}
		public string ProviderName { get; set; }
		[ForeignKey("IdentityUser")]
		public int IdentityUserId { get; set; }
		public IdentityUser IdentityUser { get; set; }
	}
}
