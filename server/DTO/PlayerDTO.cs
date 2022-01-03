using System;

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
        public string Name { get; init; }
    }
}