
exports.up = async function(knex) {
    //project table
    await knex.schema.createTable("projects", tbl => {
      tbl.increments();
      tbl
        .string("name", 64)
        .unique()
        .notNullable();
      tbl.string("description", 256);
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    });
  
    //resources table
    await knex.schema.createTable("resources", tbl => {
      tbl.increments();
      tbl
        .string("name", 64)
        .unique()
        .notNullable();
      tbl.string("description", 256);
    });
  
    //tasks table
    await knex.schema.createTable("task", tbl => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl.string("description", 256).notNullable();
      tbl.string("notes", 256);
      tbl
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
    });
  
    await knex.schema.createTable("project_resources", tbl => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
  
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("project_resources");
    await knex.schema.dropTableIfExists("task");
    await knex.schema.dropTableIfExists("resources");
    await knex.schema.dropTableIfExists("projects");
  };