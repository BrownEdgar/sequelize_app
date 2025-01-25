# sequelize app

Аржитектура Проекта

- [ ] framework - express.js
- [ ] ORM - sequelize
- [ ] DB - MySQLs
- [ ] apiDoc - Swagger

## links

- [ ] [project makets link](https://templatesjungle.com/downloads/nextgen-free-nft-marketplace-figma-website-design/)
- [ ] [MySql diagram link](https://dbdiagram.io/d/67916deb37f5d6cbeb9e49fe)

## hasMany / hasOne /belongsTo

```bash
A.hasOne(B)
A.belongsTo(B)
A.hasMany(B)
A.belongsToMany(B)
```

Порядок определения ассоциаций имеет принципиальное значение. В приведенных примерах A - это модель-источник (source), а B - это целевая модель (target). Запомните эти термины.

- [ ] A.hasOne(B) означает, что между A и B существуют отношения один-к-одному, при этом, внешний ключ (foreign key) определяется в целевой модели (B).

- [ ] A.belongsTo(B) - отношения один-к-одному, внешний ключ определяется в источнике (A).

- [ ] A.hasMany(B) - отношения один-ко-многим, внешний ключ определяется в целевой модели (B).
- [ ] [Associations](https://sequelize.org/docs/v6/core-concepts/assocs/)

### drop table

```sample
await User.drop();
```

### drop ALL table

```bash
await sequelize.drop();
```

### with SQL

```bash
const { QueryTypes } = require('sequelize');
const users = await sequelize.query('SELECT * FROM `users`', {
  type: QueryTypes.SELECT,});
```

### Order

```bash
Schema.findAll({
  order: [
    ['title', 'DESC'],

    // Կսորտավորի 'age' դաշտով
    sequelize.fn('max', sequelize.col('age')),

    // Կսորտավորի 'age' դաշտովDESC
    [sequelize.fn('max', sequelize.col('age')), 'DESC'],
  ])
```

### Limit / skip

```bash

Project.findAll({ limit: 10 });

// Skip 8
Project.findAll({ offset: 8 });

// բաց թողնել 5 հատ և դրանից հետո վերցնել հաջորդ 5-ը
Project.findAll({ offset: 5, limit: 5 });
```

### increment / decrement

```bash
await User.increment({ age: 5 }, { where: { id: 1 } });
await User.increment({ age: -5 }, { where: { id: 1 } });
```

### max / min / sum

```bash
await User.max('age'); // 40
await User.max('age', { where: { age: { [Op.lt]: 20 } } } ); // 10
await User.min('age'); // 5
await User.min('age', { where: { age: { [Op.gt]: 5 } } }); // 10
await User.sum('age'); // 55
await User.sum('age', { where: { age: { [Op.gt]: 5 } } }); // 50
```

### Model Querying - Finders

- [ ] findAll
  - The findAll method is already known from the previous tutorial. It generates a standard SELECT query which will retrieve all entries from the table (unless restricted by something like a where clause, for example).
- [ ] findByPk
  - The findAll method is already known from the previous tutorial. It generates a standard SELECT query which will retrieve all entries from the table (unless restricted by something like a where clause, for example).
- [ ] findOne
  - The findAll method is already known from the previous tutorial. It generates a standard SELECT query which will retrieve all entries from the table (unless restricted by something like a where clause, for example).
- [ ] findOrCreate
  - The findAll method is already known from the previous tutorial. It generates a standard SELECT query which will retrieve all entries from the table (unless restricted by something like a where clause, for example).
- [ ] findAndCountAll

  - The findAll method is already known from the previous tutorial. It generates a standard SELECT query which will retrieve all entries from the table (unless restricted by something like a where clause, for example).

- [ ] [All Sequelize data-types](https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types)
- [ ] [Per-attribute validations](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/#per-attribute-validations)
