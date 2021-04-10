const User = require("./User");
const List = require("./List");
const Item = require("./Item");
const { PassThrough } = require("stream");

User.hasMany(List, {
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

  Item.belongsTo(List, {
    foreignKey: 'list_id'
    
  });

  module.exports = { User, List, Item };