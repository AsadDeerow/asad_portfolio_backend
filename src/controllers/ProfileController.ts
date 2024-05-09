import { Request, Response } from 'express';
import Profile from '../models/Profile';

export const createProfile = async (req: Request, res: Response) => {
  try {
    // Extract profile data from request body
    const { name, bio, location, nationality, availability, dateOfBirth, email, phone, address, github, twitter, linkedin, expectedSalary, ownACar, haveDrivingLicense, noticePeriod, immigrationStatus, referees, willingToRelocate, languages, skills } = req.body;

    // Create a new profile record in the database
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

    // Send a success response with the newly created profile
    res.status(201).json(newProfile);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    // Extract profile ID from request parameters
    const { id } = req.params;

    // Extract updated profile data from request body
    const updatedProfileData = req.body;

    // Find the profile record in the database by ID and update it
    const [updatedRowsCount, updatedProfiles] = await Profile.update(updatedProfileData, {
      where: { id },
      returning: true // Return the updated profile record(s)
    });

    if (updatedRowsCount === 0) {
      // If no profile was found with the given ID, return a 404 error
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Send a success response with the updated profile
    res.json(updatedProfiles[0]);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const deleteProfile = async (req: Request, res: Response) => {
  try {
    // Extract profile ID from request parameters
    const { id } = req.params;

    // Find the profile record in the database by ID and delete it
    const deletedRowCount = await Profile.destroy({
      where: { id }
    });

    if (deletedRowCount === 0) {
      // If no profile was found with the given ID, return a 404 error
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Send a success response
    res.json({ message: 'Profile deleted successfully' });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

