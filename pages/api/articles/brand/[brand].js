import object from '../../../../src/object'

  export default (req, res) => {
    const { brand } = req.query
    let filter = object.articles.filter((el) => el.brand === brand)
    res.status(200).json(filter)
  }
  