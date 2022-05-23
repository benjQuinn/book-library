module.exports = (connection, DataTypes) => {
  const schema = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Must have a name",
        },
        notEmpty: {
          args: true,
          msg: "Must have a name",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Must have an email address",
        },
        notEmpty: {
          args: true,
          msg: "Must have an email address",
        },
        isEmail: {
          args: true,
          msg: "Must be a valid email address",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Must have a password",
        },
        notEmpty: {
          args: true,
          msg: "Must have a password",
        },
        len: {
          args: 8,
          msg: "Password must be 8 characters or longer",
        },
      },
    },
  };

  const ReaderModel = connection.define("Reader", schema);
  return ReaderModel;
};
