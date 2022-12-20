require('dotenv').config();

import express from 'express';
const router = express.Router();

const {
  DATABASE_URL,
  SUPABASE_SERVICE_API_KEY
} = process.env;

const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);

router.get('/', async (_req, res) => {
  const { data, err } = await supabase
    .from('posts')
    .select();
  
  if (!err) {
    res.status(200).json(data);
  }
});

export default router;