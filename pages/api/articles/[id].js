import object from '../../../src/object'

  export default (req, res) => {
    const { id } = req.query
    let filter = object.articles.filter((el) => el.id === id)
    filter = filter[0]
    res.status(200).json(filter)
  }