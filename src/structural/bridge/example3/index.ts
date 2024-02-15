interface Database{
    connect(): void
    query(query: string): any
    close(): void
}

class PostgreSQLDatabase implements Database {
    public connect(): void {
        console.log('PostgreSQL Connected');
        
    }
    public query(query: string) {
        console.log('PostgreSQL Query', query);
        
    }
    public close(): void {
        console.log('PostgreSQL Closed');
    }
}

class MongoDBDatabase implements Database {
    public connect(): void {
        console.log('MongoDB Connected');
        
    }
    public query(query: string) {
        console.log('MongoDB Query', query);
        
    }
    public close(): void {
        console.log('MongoDB Closed');
    }
}

abstract class DatabaseService{
    constructor(protected database: Database){

    }
    abstract fetchData(query: string): any
}

class ClientDatabaseService extends DatabaseService{
    public fetchData(query: string) {
        this.database.connect()
        this.database.query(query)
        this.database.close()
    }
}

// client code
let postgresService = new ClientDatabaseService(new PostgreSQLDatabase())
postgresService.fetchData('USERS')

let mongodbService = new ClientDatabaseService(new MongoDBDatabase())
mongodbService.fetchData('USERS')