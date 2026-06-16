/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {

    pgm.createTable("posts", {

        id: {
            type: "serial",
            primaryKey: true
        },


        user_id: {
            type: "integer",
            notNull: true
        },


        title: {
            type: "varchar(100)",
            notNull: true
        },


        content: {
            type: "text"
        },


        created_at: {
            type: "timestamp",
            default: pgm.func("current_timestamp")
        }

    });



    pgm.addConstraint(
        "posts",
        "posts_user_fk",
        {
            foreignKeys: {

                columns: "user_id",

                references: "users(id)",

                onDelete: "CASCADE"

            }
        }
    );


};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
    pgm.dropTable("posts");
};
