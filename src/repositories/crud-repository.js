const { where } = require("sequelize");
const { Logger } = require("../config")


class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        console.log("inside crud-repo")
        try {
            const response = await this.model.create(data); 
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Rrep: create")
            console.log(error)
            throw error;
        }
    }


    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Rrep: Destroy")
            throw error;
        }
    }


    async get(data) {
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Rrep: get")
            throw error;
        }
    }


    async getAll(data) {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Rrep: getall")
            throw error;
        }
    }


    async update(id, data) { //data is an object which will having column and value
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Rrep: update")
            throw error;
        }
    }

}

module.exports = CrudRepository