using System;
using System.Collections.Generic;
using System.Linq;
using BasicRestAPIServer.DTO;
using BasicRestAPIServer.Entities;
using BasicRestAPIServer.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace BasicRestAPIServer.Controllers
{
    [ApiController]    // Обеспечивает, что возвращаемые данные следуют стандарту REST-ful API
    [Route("Players")] // REST-запросы передаются в данный контроллер, если маршрут /Players
    public class PlayersController : ControllerBase
    {
        private readonly IPlayersRepository repository;

        public PlayersController(IPlayersRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet] // GET /Players => GetPlayers()
        public IEnumerable<PlayerDTO> GetPlayers()
        {
            var players = repository.GetPlayers().Select( player => player.AsDTO() );
            
            return players;
        }

        [HttpGet("{id}")] // GET /Players/{id} => GetPlayer()
        public ActionResult<PlayerDTO> GetPlayer(Guid id)
        {
            var player = repository.GetPlayer(id);
            if (player is null)
            {
                return NotFound();
            }
            return Ok(player.AsDTO());
        }

        [HttpPost] // POST /Players
        public ActionResult<PlayerDTO> CreatePlayer(PlayerCreateDTO playerDTO)
        {
            Player player = new()
            {
                Name = playerDTO.Name
            };

            repository.CreatePlayer(player);

            return CreatedAtAction(nameof(GetPlayer), new { id = player.Id }, player.AsDTO() );
        }
    }
}