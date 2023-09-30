module.exports = (sequelize,DataTypes)=>{
    const Movie= sequelize.define('Movie',{
        name : {
            type: DataTypes.STRING,
        },
        
    },
    {
        freezeTableName : true
    }
)
 return Movie
}