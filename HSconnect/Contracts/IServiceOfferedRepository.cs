﻿using HSconnect.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HSconnect.Contracts
{
	public interface IServiceOfferedRepository : IRepositoryBase<ServiceOffered>
	{
		public ICollection<ServiceOffered> GetServicesOfferedByProvider(int providerId);
		public ICollection<ServiceOffered> GetAllServicesOffered();
		public ServiceOffered GetServiceOffered(int id);
	}
}
