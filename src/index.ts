import express from 'express'
import diaryRouter from './routes/diaries'
const app = express()
const PORT: number = 3000

app.use(express.json())
app.use('/api/diaries', diaryRouter)

app.get('/ping', (_, res) => {
  console.log('someone pinged here')
  res.send('pong')
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
