// {
//     "id": "cd99557a-8750-463e-a3fa-7f7bd9ecf37a",
//     "nome": "João",
//     "sexo": "Masculino",
//     "updatedAt": "2023-10-23T14:37:35.917Z",
//     "createdAt": "2023-10-23T14:37:35.917Z"
// }

const { Model, DataTypes } = require("sequelize")

class Pessoa extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            sexo: DataTypes.STRING
        }, {
            sequelize
        })
    }
}
