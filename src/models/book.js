module.exports = (connection, DataTypes) => {
  const schema = {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Must have a title",
        },
        notEmpty: {
          args: true,
          msg: "Must have a title",
        },
      },
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Must have an author",
        },
        notEmpty: {
          args: true,
          msg: "Must have an author",
        },
      },
    },
    genre: {
      type: DataTypes.STRING,
    },
    ISBN: {
      type: DataTypes.INTEGER,
    },
  };

  const BookModel = connection.define("Book", schema);
  return BookModel;
};
