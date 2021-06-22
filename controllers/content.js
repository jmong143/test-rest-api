/**
 * @route GET /content/all
 * @group Content
 * @produces application/json
 * @consumes application/json
 */
const getAllContent = async (req, res) => {
  try {
    res.status(200).jsonp({ msg: 'Content found', data: 'response' });
	} catch (err) {
    res.status(400).jsonp({ msg: err });
  }
}


const content = {
  getAllContent,
};

export default content;
