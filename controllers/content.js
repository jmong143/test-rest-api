import wordsReverser from '../helpers/reverse'
import sortString from '../helpers/sort'

const reverseWords = async (req, res) => {
  try {
    const reverseResult = wordsReverser(req.query.sentence)
    res.status(200).jsonp({ msg: 'Content found', data: reverseResult})
	} catch (err) {
    res.status(400).jsonp({ msg: err });
  }
}

const sortWords = async (req, res) => {
  try {
    const sortResult = sortString(req.query.sentence)
    res.status(200).jsonp({ msg: 'Content found', data: sortResult})
  } catch (err) {
    res.status(400).jsonp({ msg: err });
  }
}



const ContentController = {
  reverseWords,
  sortWords
};

export default ContentController;
