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
 *                       message:
 *                         type: string
 *                         description: Response message
 *                         example: Successfully reverse sentence
 *                       name:
 *                         type: string
 *                         description: Reverse word result
 *                         example: s'XL daeh eciffo si detacol ni yendyS, ailartsuA.
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
 *                       message:
 *                         type: string
 *                         description: Response message
 *                         example: Successfully reverse sentence
 *                       name:
 *                         type: string
 *                         description: Reverse word result
 *                         example: "'LsX adeh ceffio is acdelot in denSyy, Aaailrstu."
 */
router.get('/sort-words', ContentController.sortWords);

/**
 * @swagger
 * /calculate-after-tax-income:
 *   get:
 *     summary: Calculate tax income
 *     description: Calculates the annual take home pay for a given salary in Australia
 *     parameters:
 *       - name: annualBaseSalary
 *         in: query
 *         description: Annual Base Salary
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
 *                       baseSalary:
 *                         type: integer
 *                         description: Base Salary.
 *                         example: 85000
 *                       superannuation:
 *                         type: integer
 *                         description: Super annuation
 *                         example: 8075
 *                       taxes:
 *                         type: object
 *                         description: Super annuation
 *                         properties:
 *                           income:
 *                             type: integer
 *                             example: 19172
 *                           medicare:
 *                             type: integer
 *                             example: 19172
 *                           total:
 *                             type: integer
 *                             example: 19172
 *                       postTaxIncome:
 *                         type: integer
 *                         description: PostTaxIncome
 *                         example: 64128
 */
router.get('/calculate-after-tax-income', ContentController.calculateTaxIncome);

module.exports = router;
