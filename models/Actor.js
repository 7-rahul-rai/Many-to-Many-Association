module.exports = (sequelize,DataTypes)=>{
    const Actor= sequelize.define('Actor',{
        name : {
            type: DataTypes.STRING,
        },

    },
    {
        freezeTableName : true
    }
)
 return Actor
}