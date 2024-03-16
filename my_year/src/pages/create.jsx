
import { createClient } from '@supabase/supabase-js';

import supabase from "../client"

//const supabase = createClient('your-url', 'your-public-key');

async function create(taskData) {
  try {
    const { data, error } = await supabase.from('task').insert([
      {
        taskData: taskData
      }
    ]);
    if (error) throw error;
    console.log('Table created:', data);
  } catch (error) {
    console.error('Error creating task:', error.message);
  }
}

export default create;
