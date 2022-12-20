import express from 'express';
const router = express.Router();
import supabase from '../db';

router.get('/', async (_req, res) => {
  const { data, err } = await supabase
    .from('posts')
    .select()
    .order('id', { ascending: false });
  
  if (!err) {
    res.status(200).json(data);
  }
});

router.post('/', async (req, res) => {
  const { data, err } = await supabase
    .from('posts')
    .insert({
      title: req.body.title,
      content: req.body.content
    })
    .select();

  if (!err) {
    res.status(201).json(data);
  }
});

export default router;