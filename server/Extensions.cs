using BasicRestAPIServer.DTO;
using BasicRestAPIServer.Entities;

namespace BasicRestAPIServer
{
    public static class Extensions {
        public static PlayerDTO AsDTO(this Player player)
        {
            return new PlayerDTO 
            {
                Id = player.Id,
                Name = player.Name,
                CreatedDate = player.CreatedDate
            };
        }
    }
}