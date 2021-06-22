import { ContentController } from '../controllers';
const { Router } = require('express');
const router = Router();
/**
 * @swagger
 * /reverse-words:
 *   get:
 *     summary: Reverse words
 *     description: Reverse words
 *     parameters:
 *       - name: sentence
 *         in: query
 *         description: Reverses the letters of each word in a sentence
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.get('/reverse-words', ContentController.reverseWords);

/**
 * @swagger
 * /sort-words:
 *   get:
 *     summary: Sort words
 *     description: Sort words
 *     parameters:
 *       - name: sentence
 *         in: query
 *         description: Reverses the letters of each word in a sentence
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.get('/sort-words', ContentController.sortWords);

module.exports = router;
