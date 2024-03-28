
import { createClient } from '@supabase/supabase-js';
import supabase from "../client"


async function create(taskData) {
  try {
    const { data, error } = await supabase.from('task').insert([
      {
        taskData: taskData
      }
    ]);
    if (error) throw error;
  } catch (error) {
  }
}

export default create;
