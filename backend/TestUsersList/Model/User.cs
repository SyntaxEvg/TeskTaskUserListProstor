using TestUsersList.Model;

namespace TestUsersList.Model
{
    public class UserDTO
    {
        public Guid id { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
    }
}
//User myDeserializedClass = JsonConvert.DeserializeObject<List<User>>(myJsonResponse);