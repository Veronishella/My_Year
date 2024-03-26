
import supabase from "../client";
import React, { useEffect } from 'react';

const ReadData = ({ tasks }) => {
  useEffect(() => {
    console.log("Tasks from database:", tasks)
  }, [ tasks ]);

  return null;

}

export default ReadData;

