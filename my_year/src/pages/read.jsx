// Importujte vášho klienta Supabase
import supabase from "../client";
import React, { useEffect } from 'react';

const ReadData = () => {
  useEffect(() => {
    printData();
  }, []);

  // Kód na výpis manuálneho záznamu do konzoly
  async function printData() {
    try {
      // Načítanie záznamu z databázy
      const { data, error } = await supabase
        .from('task')
        .select('*')
        

      // Vypíš údaje záznamu do konzoly
      console.log('Manually inserted row:', data);
    } catch (error) {
      console.error('Error fetching manually inserted row:', error.message);
    }
  }

  return null; 
}

export default ReadData;
