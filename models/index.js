const User = require("./User");
const List = require("./List");
const Item = require("./Item");

//hasMany if we decide to give the user multiple lists
User.hasOne(List, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  List.belongsTo(User, {
    foreignKey: 'user_id'
  });

  List.hasMany(Item, { 
      foreignKey:"list_id",
      onDelete: "CASCADE"
  });

  User.belongsToMany(List, {
    foreignKey: 'user_id'
  });

  module.exports = { User, List, Item };