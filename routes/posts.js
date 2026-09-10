import express from 'express'
import { createPost, getPosts } from '../controllers/posts.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const require = createRequire(import.meta.url);

const router = express.Router();

router.get('/', getPosts )
router.post('/', createPost )

export default router;
