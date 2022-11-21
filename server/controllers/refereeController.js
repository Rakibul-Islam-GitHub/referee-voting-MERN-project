import Referee from "../models/refereeModel.js";

export const addReferee = async (req, res) => {
    const { name, age, imageurl, description, matches, redcard, yellowcard } = req.body;
  
    try {
        
        if (!name || !age || !imageurl || !redcard)
        {
          return res.status(400).json({ message: "All fields required" });
        }
        
  
      const createdUser = await Referee.create({
        name,
        age,
        imageurl,
        description,
        matches,
        redcard,
        yellowcard
      });
  
    
      res.status(201).json({ createdUser });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      
      console.log(error);
    }
  };