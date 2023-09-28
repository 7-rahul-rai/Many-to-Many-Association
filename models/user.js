module.exports = (sequelize,DataTypes)=>{
    const User= sequelize.define('User',{
        firstname : {
            type: DataTypes.STRING(10),
        },
        lastname:{ 
            type: DataTypes.STRING(50)
        }
    },
    {
        freezeTableName : true
    }
)
 return User
}