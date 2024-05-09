// profileRoutes.ts

import { Request, Response } from 'express';
import Profile from '../models/Profile';

export const createProfile = async (req: Request, res: Response) => {
  try {
    const { name, bio, location, nationality, availability, dateOfBirth, email, phone, address, github, twitter, linkedin, expectedSalary, ownACar, haveDrivingLicense, noticePeriod, immigrationStatus, referees, willingToRelocate, languages, skills } = req.body;
    const newProfile = await Profile.create({
      name,
      bio,
      location,
      nationality,
      availability,
      dateOfBirth,
      email,
      phone,
      address,
      github,
      twitter,
      linkedin,
      expectedSalary,
      ownACar,
      haveDrivingLicense,
      noticePeriod,
      immigrationStatus,
      referees,
      willingToRelocate,
      languages,
      skills
    });
    res.status(201).json(newProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedProfileData = req.body;
    const [updatedRowsCount, updatedProfiles] = await Profile.update(updatedProfileData, {
      where: { id },
      returning: true
    });
    if (updatedRowsCount === 0) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(updatedProfiles[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const deleteProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedRowCount = await Profile.destroy({
      where: { id }
    });
    if (deletedRowCount === 0) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json({ message: 'Profile deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
