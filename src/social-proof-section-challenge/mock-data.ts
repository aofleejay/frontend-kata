import imageColton from './images/image-colton.jpg'
import imageIrene from './images/image-irene.jpg'
import imageAnne from './images/image-anne.jpg'

const reviews = [
  {
    id: 1,
    user: {
      displayName: 'Colton Smith',
      image: imageColton,
    },
    text:
      'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!',
  },
  {
    id: 2,
    user: {
      displayName: 'Irene Roberts',
      image: imageIrene,
    },
    text:
      'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.',
  },
  {
    id: 3,
    user: {
      displayName: 'Anne Wallace',
      image: imageAnne,
    },
    text:
      'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!',
  },
]

export { reviews }
