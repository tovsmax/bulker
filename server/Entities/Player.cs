using System;

namespace BasicRestAPIServer.Entities
{
    public record Player
    {
        public Guid Id { get; init; } = Guid.NewGuid();
        public string Name { get; init; }
        public DateTimeOffset CreatedDate { get; init; } = DateTimeOffset.UtcNow;
    }
}