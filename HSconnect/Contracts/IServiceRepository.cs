﻿using HSconnect.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HSconnect.Contracts
{
	public interface IServiceRepository : IRepositoryBase<Service>
	{
		ICollection<Service> GetAllServices();
	}
}
