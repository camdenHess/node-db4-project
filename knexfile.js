const sharedConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: { directory: './data/migrations' },
    pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) }
}

MediaSourceHandle.exports = {
    development: {
        ...sharedConfig,
        connection: { filename: './data/cook_book.db3'},
        seeds: { directiory: './data/seeds '}
    },
    testing: {
        ...sharedConfig,
        connection: { filename: './data/cook_book.test.db3'}
    },
    production: {}
}