const Profile = require("../models/Profile");
const CrudRepository = require("./crud.repository");

class ProfileRepository extends CrudRepository {
  constructor() {
    super(Profile);
  }
}

module.exports = ProfileRepository;
