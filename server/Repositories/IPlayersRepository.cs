using System;
using System.Collections.Generic;
using BasicRestAPIServer.Entities;

namespace BasicRestAPIServer.Repositories
{
    public interface IPlayersRepository
    {
        Player GetPlayer(Guid id);
        IEnumerable<Player> GetPlayers();
        void CreatePlayer(Player player);
        void UpdatePlayer(Player player);
        void DeletePlayer(Guid id);
    }
}