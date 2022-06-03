import Doc from '../models/doc.js'


export const createDoc = async (req, res) => {
  
  try{
    const title = req.body.title
    const data = req.body.data
    const doc = new Doc({
        title,
        data: JSON.stringify(data),
        owner: req.user._id
    })
    await doc.save();
    res.status(201).send(doc)
  } catch(error) {
    res.status(400).send({status: 'fail'})
  }

}

export const getDocs = async (req, res) => {
  try {
    const docs = await Doc.find({owner: req.user._id})
    res.send(docs)
  } catch(error) {
    res.status(500).send({error})
  }

}

export const getOneDocs = async (req, res) => {
  const _id = req.params.id 
  
  try {
    const doc = await Doc.findOne({_id, owner: req.user._id})

    if(!doc) {
      return res.status(404).send()
    }
    res.send(doc)
  } catch(error){
    res.status(500).send(error)
  }

}

export const deleteDoc = async (req, res) => {
  const _id = req.params.id 
  
  try {
    const doc = await Doc.findOneAndDelete({_id, owner: req.user._id})

    if(!doc) {
      return res.status(404).send()
    }
    res.send(doc)
  } catch(error){
    res.status(500).send(error)
  }

}

export const updateDoc = async (req, res) => {
  const _id = req.params.id 

  const updates = Object.keys(req.body)
  const allowedUpdates = ['title', 'data']
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update),
  );

  if (!isValidOperation) {
    res.status(400).send({error: 'Not a validate operation'});
  }

  try {
    const doc = await Doc.findOne({_id, owner: req.user._id})

    if(!doc) {
      return res.status(404).send()
    }
    updates.forEach((update) => {
      if (update === 'data') {
        req.body[update] = JSON.stringify(req.body[update])
      }
      doc[update] = req.body[update]
    });
    await doc.save();
    res.send(doc);
  } catch (error) {
    res.status(500).send({error});
  }

}


