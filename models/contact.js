module.exports = (sequelize,DataTypes)=>{
    const Contact= sequelize.define('Contact',{
        city : {
            type: DataTypes.STRING(10),
        },
        mobile:{ 
            type: DataTypes.INTEGER
        }
    },
    {
        freezeTableName : true
    }
)
 return Contact
}