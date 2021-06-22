import axios from 'axios'
import wordsReverser from '../helpers/reverse'
import sortAlphabets from '../helpers/sort'

const reverseWords = async (req, res) => {
  try {
    const reverseResult = wordsReverser(req.query.sentence)
    res.status(200).jsonp({ message: 'Successfully reverse sentence', data: reverseResult})
	} catch (err) {
    res.status(400).jsonp({ message: err });
  }
}

const sortWords = async (req, res) => {
  try {
    const sortResult = sortAlphabets(req.query.sentence)
    res.status(200).jsonp({ message: 'Successfully sort sentence', data: sortResult})
  } catch (err) {
    res.status(400).jsonp({ message: err })
  }
}

const calculateTaxIncome = async (req, res) => {
  try {
    const annualBaseSalary = req.query.annualBaseSalary
    await axios.get(`http://tech-challenge.lx-cloud.com/api/calculate-after-tax-income?annualBaseSalary=${annualBaseSalary}`)
    .then(function (response) {
      res.status(200).jsonp({ message: 'Successfully calculated tax income', data: response.data})
    })
    .catch(function (error) {
      res.status(400).jsonp({ message: error })
    })
  } catch (err) {
    res.status(400).jsonp({ message: err })
  }
}

const ContentController = {
  reverseWords,
  sortWords,
  calculateTaxIncome
};

export default ContentController;
