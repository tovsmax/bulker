using System.Collections.Generic;
using BasicRestAPIServer.Entities;
using BasicRestAPIServer.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace BasicRestAPIServer.Controllers
{
    [ApiController]  // Обеспечивает, что возвращаемые данные следуют стандарту REST-ful API
    [Route("Players")] // REST-запросы передаются в данный контроллер, если маршрут /Players
    public class PlayersController : ControllerBase
    {
        private readonly InMemPlayersRepository repository;

        public PlayersController()
        {
            repository = new InMemPlayersRepository();
        }

        [HttpGet] // GET /Players => GetPlayers()
        public IEnumerable<Player> GetPlayers()
        {
            var players = repository.GetPlayers();
            return players;
        }
    }
}