using System;

namespace BasicRestAPIServer.Entities
{
    public record Player
    {
        public Guid Id { get; init; }
        public string Name { get; init; }
        public DateTimeOffset CreatedDate { get; init; }
    }
}