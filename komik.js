module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define('Komik', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title : {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        autor: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'komik',
        timestamps: false
    });

    return Komik;
};