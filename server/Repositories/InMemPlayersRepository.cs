using System;
using System.Linq;
using System.Collections.Generic;
using BasicRestAPIServer.Entities;

namespace BasicRestAPIServer.Repositories
{
    public class InMemPlayersRepository : IPlayersRepository
    {
        private readonly List<Player> players = new()
        {
            new Player { Id = Guid.NewGuid(), Name = "Montferrat", CreatedDate = DateTimeOffset.UtcNow },
            new Player { Id = Guid.NewGuid(), Name = "Mao",        CreatedDate = DateTimeOffset.UtcNow },
            new Player { Id = Guid.NewGuid(), Name = "Metrarkius", CreatedDate = DateTimeOffset.UtcNow }
        };

        public IEnumerable<Player> GetPlayers()
        {
            return players;
        }

        public Player GetPlayer(Guid id)
        {
            return players.Where(player => player.Id == id).SingleOrDefault();
        }
    }
}