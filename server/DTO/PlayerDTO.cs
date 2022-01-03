using System;
using System.ComponentModel.DataAnnotations;

namespace BasicRestAPIServer.DTO
{
    public record PlayerDTO
    {
        public Guid Id { get; init; }
        public string Name { get; init; }
        public DateTimeOffset CreatedDate { get; init; }
    }

    public record PlayerCreateDTO
    {
        [Required]
        public string Name { get; init; }
    }
}