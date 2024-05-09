import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface ProfileAttributes {
  id: number;
  name: string;
  bio: string;
  location: string;
  nationality: string;
  availability: string;
  dateOfBirth: Date;
  email: string;
  phone: string;
  address: string;
  github: string;
  twitter: string;
  linkedin: string;
  expectedSalary: number;
  ownACar: boolean;
  haveDrivingLicense: boolean;
  noticePeriod: string;
  immigrationStatus: string;
  referees: string;
  willingToRelocate: boolean;
  languages: string;
  skills: string;
}

interface ProfileCreationAttributes extends Optional<ProfileAttributes, 'id'> {}

class Profile extends Model<ProfileAttributes, ProfileCreationAttributes> implements ProfileAttributes {
  public id!: number;
  public name!: string;
  public bio!: string;
  public location!: string;
  public nationality!: string;
  public availability!: string;
  public dateOfBirth!: Date;
  public email!: string;
  public phone!: string;
  public address!: string;
  public github!: string;
  public twitter!: string;
  public linkedin!: string;
  public expectedSalary!: number;
  public ownACar!: boolean;
  public haveDrivingLicense!: boolean;
  public noticePeriod!: string;
  public immigrationStatus!: string;
  public referees!: string;
  public willingToRelocate!: boolean;
  public languages!: string;
  public skills!: string;

  // Other class methods can be added here if needed
}

Profile.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
  bio: DataTypes.TEXT,
  location: DataTypes.STRING,
  nationality: DataTypes.STRING,
  availability: DataTypes.STRING,
  dateOfBirth: DataTypes.DATE,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  address: DataTypes.STRING,
  github: DataTypes.STRING,
  twitter: DataTypes.STRING,
  linkedin: DataTypes.STRING,
  expectedSalary: DataTypes.FLOAT,
  ownACar: DataTypes.BOOLEAN,
  haveDrivingLicense: DataTypes.BOOLEAN,
  noticePeriod: DataTypes.STRING,
  immigrationStatus: DataTypes.STRING,
  referees: DataTypes.TEXT,
  willingToRelocate: DataTypes.BOOLEAN,
  languages: DataTypes.TEXT,
  skills: DataTypes.TEXT,
}, {
  sequelize,
  modelName: 'Profile',
});

export default Profile;
