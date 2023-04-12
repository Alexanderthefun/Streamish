using System.Collections.Generic;
using Streamish.Models;

namespace Streamish.Repositories
{
	public interface IUserProfileRepository
	{
		List<UserProfile> GetAll();
		UserProfile GetById(int id);
		public UserProfile GetUserByIdWithVideosAndComments(int id);
		void Add(UserProfile user);
		void Delete(int id);
		void Update(UserProfile user);
		public List<UserProfile> GetAllUsersWithVideos();
	}
}